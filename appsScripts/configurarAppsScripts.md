# Abrir projeto AppsScripts no vscode

## Iniciar projeto
~~~bash
# Cria o packet.json dentro da pasta do projeto
npm init -y
~~~

## Instalar o programa do google via npm

~~~bash
#Instalação local
npm install @google/clasp
npm install -S @types/google-apps-script

#Instalação global
npm install -g @google/clasp
npm install -S @types/google-apps-script
~~~

## Vincular o seu documento do google sheets utilizando o __clasp__

~~~bash
#Fazer o login da conta google com o comando abaixo
npx clasp login

#Pegar o id do script no ambiente Web appsScripts e utilizar no comando abaixo:
npx clasp clone 'ID DO SCRIPT'
~~~
> Obs: Segue abaixo uma imagem de onde pegar esse ID:
> ![link no ambiente web](assets/IMG%201%20-%20link%20do%20appsScripts.jpg)

Após esse procedimento todos os arquivos serão adicionados a pasta que foram realizados esses passos.

__OBS: O link é do projeto AppsScripts não da planilha.__

### Comandos adicionais

~~~bash
# Sobe alterações realizadas nos arquivos.
npx clasp push

# Pega os códigos mais atualizados que possivelmente foram feitos por outra pessoa.
npx clasp pull
~~~