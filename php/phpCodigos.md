# Códigos que eu considero importante documentar.

[ <-- __PÁGINA INICIAL__](/README.md)

1. [isset()](#funcIsset)

<a id="funcIsset"></a>

## isset()

~~~php
isset($_GET['rota']);
# Neste exemplo ele vai checar se existe na url alguma requisição get com o nome rota no queryparam.
~~~

A super global $_GET é um array. E o isset está sendo utilizado para checar a existência dessa chave __rota__. Caso ela exista retorna o valor 1, se não null.