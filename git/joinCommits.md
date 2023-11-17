# Junção de commits

[ <-- __PÁGINA INICIAL__](/README.md)

O objetivo é limpar o log com commits repetidos e desnecessários. Essa forma é para o caso de haver muitos commits.

~~~bash
git rebase -i HEAD~<n>
# <n> substituir pela quantidade de commits.
~~~
Após esse comando irá abrir no editor de texto de sua preferência todos os commits selecionados a partir o HEAD. Utilizando a palavra __squash__, __pick__ e __drop__.

* squash fara a junção dos commits
* drop remove o commit
* pick comit onde será aplicado o rebase, na minha opinião é melhor sempre usar o último. Mas ainda não está claro.

Agora é só salvar e fechar o documento. Antes de finalizar ainda abrirá um outro documento onde você pode definir o nome do commit. Seguindo o mesmo passo salvar e fechar o documento após definir.