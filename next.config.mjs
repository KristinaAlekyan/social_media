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
      },
      {protocol:"https",
        hostname: "assets.designhill.com"
      }
    ]
  }
};

export default nextConfig;
