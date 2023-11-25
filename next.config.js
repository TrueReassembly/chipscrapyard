/** @type {import('next').NextConfig} */
const nextConfig = {
    generateBuildId: async () => {
        return 'build'
    }
}

module.exports = nextConfig
