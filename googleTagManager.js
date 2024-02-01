export const GTM_ID = "GTM-PJ64FR6C";

export const pageview = (url) => {
  window.dataLayer.push({
    event: "pageview",
    page: url,
  });
};
