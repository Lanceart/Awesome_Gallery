/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        serverActions: true,
    },
    images:{
        domains:[
            "avatars.githubusercontent.com",
            "res.cloudinary.com"
        ]
    }

}

module.exports = nextConfig
