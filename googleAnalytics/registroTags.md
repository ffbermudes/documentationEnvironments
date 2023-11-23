# Tags google Analytics

[ <-- __PÁGINA INICIAL__](/README.md)

## Tag Page View

Segue abaixo código para enviar pageview para o google analytics

~~~html

<!-- Aqui eu me conecto com api passando o código do meu google analytics após o ?id=G-XXXXXXX-->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-8L34C22TJ2"></script>

<!-- Criar no objeto global uma variável datalayer a função serve para inserir os dados dentro do datalayer -->
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

	// Enviando dados para <n> google analytics.
  gtag('config', 'G-8L34C22TJ2');
</script>
~~~

> Essas são as configurações básicas para começar o tagmento de eventos e conversões. A partir de agora toda lógica pode ser emplementada abaixo. Pode-se utilizar outra tag script abaixo separado.