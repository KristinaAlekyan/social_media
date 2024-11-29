/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: true,
    ppr: 'incremental'
  },
  images:{
    remotePatterns:[
      {protocol:"https",
        hostname: "www.recordnet.com"
      },
      {protocol:"https",
        hostname: "www.planetware.com"
      }
    ]
  }
};

export default nextConfig;
