const { loadModule } = require("cld3-asm");

addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request));
});

/**
 * Fetch and log a request
 * @param {Request} request
 */
async function handleRequest(request) {
  const cldFactory = await loadModule();
  const identifier = cldFactory.create(0, 1000);
  const findResult = identifier.findLanguage(
    "This piece of text is in English. "
  );
  identifier.dispose();
  return new Response(JSON.stringify(findResult), { status: 200 });
}
