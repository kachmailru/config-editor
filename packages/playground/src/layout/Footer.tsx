export default function Footer() {
  return (
    <div className='col-sm-12 hidden'>
      <p style={{ textAlign: 'center' }}>
        Powered by <a href='https://github.com/kachmailru/config-editor'>config-editor</a>.
        {import.meta.env.VITE_SHOW_NETLIFY_BADGE === 'true' && (
          <div style={{ float: 'right' }}>
            <a href='https://www.netlify.com'>
              <img src='https://www.netlify.com/img/global/badges/netlify-color-accent.svg' />
            </a>
          </div>
        )}
      </p>
    </div>
  );
}
