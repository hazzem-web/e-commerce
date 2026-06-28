
const url: any = process.env.DB_URL

const port: any= process.env.PORT

const mode: string | undefined = process.env.MODE

const ADMIN_JWT: string | undefined = process.env.ADMIN_JWT

const USER_JWT: string | undefined = process.env.USER_JWT

const REFRESH_ADMIN_JWT: string | undefined = process.env.REFRESH_ADMIN_JWT

const REFRESH_USER_JWT: string | undefined = process.env.REFRESH_USER_JWT

const APP_EMAIL: string | undefined = process.env.APP_EMAIL

const APP_PASSWORD: string | undefined = process.env.APP_PASSWORD

const Ai_api: string | undefined = process.env.AI_API

const groq_api : string | undefined = process.env.GROQ_API

const image_api : any = process.env.IMAGE_API

const redisUrl : any = process.env.REDIS_URL

const HF_TOKEN : any = process.env.HF_TOKEN
export {
    url,
    port,
    mode,
    ADMIN_JWT,
    USER_JWT,
    REFRESH_ADMIN_JWT,
    REFRESH_USER_JWT ,
    APP_EMAIL,
    APP_PASSWORD ,
    Ai_api , 
    groq_api ,
    image_api ,
    redisUrl , 
    HF_TOKEN
}
