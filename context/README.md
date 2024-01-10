# How to use the `auth.tsx`

## STEP 1:

add `AuthProvider` to top of the root-layout

see `src\app\layout.tsx`


## STEP 2:


if you want the login state
```
const {isLogin} = useAuth()
```

if you want to pass the userInfo and update the state of the app
```
const {login} = useAuth()
```

just want to log out
```
const {logout} = useAuth()
```

example:

`components\layout\root-layout\navbar.tsx`


# How to create `auth.tsx`

see in the file itself