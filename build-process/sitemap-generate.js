const xml = require('xml');
const slugify = require('slugify');
const writeFile = require('fs').writeFile;
const promisify = require('util').promisify;
const path = require('path');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const writeFileAsync = promisify(writeFile);
const distFolder = path.join(process.cwd(), 'public/sitemap.xml');

const getPagesData = async function () {
    try {
        let apiUrl = 'https://blog-django-production-ff19.up.railway.app/v1/api-blog-fxeater/'

        let response = await fetch(apiUrl);
        let jsonData = await response.json();
        let outData = jsonData.results.map(
            item => {
                return {
                    title: item.name,
                    created: item.created_at,
                    id: item.id,
                    type: 1
                }
            }
        );

        apiUrl = 'https://blog-django-production-ff19.up.railway.app/v1/api-chart-pattern/'

        response = await fetch(apiUrl);
        jsonData = await response.json();
        const subData = jsonData.results.map(
            item => {
                return {
                    title: item.name,
                    created: item.created_at || '2023-06-13T16:03:24Z',
                    id: item.id,
                    type: 2
                }
            }
        );

        outData = [
            ...outData,
            ...subData
        ]

        return outData;
    } catch (error) {
        return []
    }
};


async function main() {
    console.log("generate sitemap>> START")
    const pages = await getPagesData();
    console.log("generate sitemap>> FETCH DATA DONE")
    const indexItem = [
        {
            //build index item
            url: [
                {
                    loc: "https://blog-django-production-ff19.up.railway.app/",
                },
                {
                    lastmod: get_last_mod(pages)
                },
                { changefreq: "daily" },
                { priority: "1.0" },
            ],
        },
        {
            url: [
                {
                    loc: "https://blog-django-production-ff19.up.railway.app/about",
                },
                {
                    lastmod: get_last_mod(pages)
                },
                { priority: "0.8" },
            ]
        },
    ];

    const sitemapItems = pages.reduce(function (items, item) {
        // build page items
        items.push({
            url: [
                {
                    loc: item.type == 1
                        ? `https://blog-django-production-ff19.up.railway.app/blog/${item.id}-${slugify(item.title, { locale: 'vi' }).toLowerCase()}`
                        : `https://blog-django-production-ff19.up.railway.app/learn/learn-chart/${item.id}-${slugify(item.title, { locale: 'vi' }).toLowerCase()}`,
                },
                {
                    lastmod: new Date(item.lastModified ?? item.created)
                        .toISOString()
                        .split("T")[0],
                },
            ],
        });
        return items;
    }, []);
    const sitemapObject = {
        urlset: [
            {
                _attr: {
                    xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9",
                },
            },
            ...indexItem,
            ...sitemapItems,
        ],
    };
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>${xml(sitemapObject)}`;
    console.log(`generate sitemap>> DONE with ${sitemapObject.urlset.length} pages`)
    await writeFileAsync(distFolder, sitemap, "utf8");
}

const get_last_mod = (pages) => {
    const my_date = new Date(Math.max.apply(null, pages.map((page) => {
        return new Date(page.lastModified ?? page.created);
    })))

    return my_date.toISOString().split("T")[0]
}

main();
