# nextjs13-with-formrender
nextjs13和xrender中formRender的最小实践

1. next.config.js 中加入配置
   transpilePackages: ['form-render'],
2. 页面中引用

const FormRenderwithoutssr = dynamic(() => import('../pages/schema/formRender'), {
ssr: false,
});

form-render 本身不支持ssr
