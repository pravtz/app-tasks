const GA = process.env.NEXT_PUBLIC_GA_TRACKING || ''

const Analytics = () => (
  <>
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${GA}`}
    ></script>
    <script
      dangerouslySetInnerHTML={{
        __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA}',
      {page_path: windows.location.pathname} );
  `
      }}
    />
  </>
)

export default Analytics
