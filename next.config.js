/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.pexels.com"], // Adicione o domínio da imagem aqui
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
