# Tags google Analytics

[ <-- __PÁGINA INICIAL__](/README.md)

1. [Tag padrão do GA4 - Google analytics 4](#topico1)
2. [Tag event personalizada com parâmetros personalizados](#topico2)

<a id="topico1"> </a>

## Tag padrão google analytics

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

<a id="topico2"> </a>

# Tag de evento personalizada com parâmetros personalizados

código html: 

~~~html
<script>
  gtag('event', 'custom_event', {
    'custom_parameter1': 'valor1',
    'custom_parameter2': 'valor2',
    'custom_parameter3': 'valor3',
    'event_timeout': 5000,
    'event_callback': function () {
      console.log('Evento personalizado registrado com sucesso dentro do tempo limite!');
      // Importante destacar que aqui eu posso fazer o procedimento após a tag ser enviada com sucesso!
    }
  });
</script>
~~~