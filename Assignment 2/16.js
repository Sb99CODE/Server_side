const url =
  'https://helloworld.com/questions/8761627/aldk-jlasdjl-aldk-on-adkn';

const parsedUrl = new URL(url);

console.log(parsedUrl.protocol);
console.log(parsedUrl.host);
console.log(parsedUrl.origin);
console.log(parsedUrl.searchParams);
console.log(parsedUrl.href);
