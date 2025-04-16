// export const getScreenshotUrl = (siteUrl) => {
//   const encodedUrl = encodeURIComponent(siteUrl);
//   return `https://image.thum.io/get/fullpage/${encodedUrl}`;
// };

export const getScreenshotUrl = (siteUrl) => {
  return `https://image.thum.io/get/fullpage/${siteUrl}`;
};
