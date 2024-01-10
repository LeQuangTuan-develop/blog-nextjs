type TLazyImageProps = {
  src: string,
  alt?: string,
  style?:string,
  width?:number,
  height?:number,
  fit?: 'contain' | 'cover'
}

const fitMap = {
  contain:'object-contain',
  cover:'object-cover'
}

const LazyImage = (props:TLazyImageProps) => {

  return (
    <>
      <img src={props.src} alt={props.alt} 
      className={`inline-block ${fitMap[props.fit || 'cover']} ${props.style ? props.style: ''}`} 
      width={props.width}
      height={props.height}
      loading="lazy"/>
    </>
  )
}

export default LazyImage