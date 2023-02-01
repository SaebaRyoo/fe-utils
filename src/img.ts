// 将图片流转为base64
const convertImgStreamToBase64 = (
  originFileObj: File,
  callback: (r: string | ArrayBuffer | null) => void
) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(originFileObj);
};

// 图片下载,当要下载的图片为接口返回的流时，且接口需要认证。场景: 用在后台项目中，
const downloadImgStream = (() => {
  let filename = 'default';
  let extra = '';
  const fn = (url: string, options: any = {}): void => {
    const defaultOptions = {
      credentials: 'include',
      headers: {
        Authorization: localStorage && localStorage.getItem('token'),
      },
      ...options,
    };
    fetch(url, defaultOptions)
      .then((res: Response) => {
        const fileHeader = res.headers.get('content-disposition');
        if (fileHeader) {
          const ascllFileName = fileHeader.split('=')[1].split('.')[0];
          extra = fileHeader.split('=')[1].split('.')[1];

          filename = decodeURI(ascllFileName);
        }
        return res.blob();
      })
      .then((blob: Blob) => URL.createObjectURL(blob))
      .then((downloadUrl: string) => {
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = `${filename}.${extra}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
  };
  return fn;
})();

export { convertImgStreamToBase64, downloadImgStream };
