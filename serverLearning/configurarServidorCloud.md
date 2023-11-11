# Configuração Inicial do Servidor Cloud

## Criar Uma Instância Em Qualquer Servidor Cloud

[ <-- __PÁGINA INICIAL__](/README.md)

...

## Configurações Iniciais do Servidor
~~~bash
#Acessar o servidor pelo terminal via ssh
ssh root@IP_DO_SERVIDOR

#Atualizar repositórios e instalar pacotes
apt update && apt upgrade -y

#Reiniciar servidor
systemctl reboot
~~~

~~~bash
#Configurar data e hora local
systemctl dpkg-reconfigure tzdata
~~~

## Criar Usuário
~~~bash
#Adicionar usuário
adduser NOME_DO_USUÁRIO

#Adicionar usuário ao grupo sudo
usermod -aG sudo NOME_DO_USUÁRIO

#Acessar a pasta do usuario
su - NOME_DO_USUÁRIO

#Verificar a existência da pasta .ssh no root
sudo ls -la /root/

#Exibir o conteúdo do arquivo authorized_keys
sudo more /root/.ssh/authorized_keys

#Criar a pasta .ssh
mkdir .ssh

#Copiar o arquivo authorized_keys para a pasta .ssh do usuário
sudo cp /root/.ssh/authorized_keys /.ssh

#Adicionar permissões ao usuário
sudo chown NOME_DO_USUÁRIO:NOME_DO_USUÁRIO /.ssh/authorized_keys

#Reiniciar servidor
systemctl reboot

#Acessar o servidor pelo terminal via ssh
ssh NOME_DO_USUÁRIO@IP_DO_SERVIDOR
~~~

## Instalar Apache
~~~bash
#Instalar apache
sudo apt install apache2

#Iniciar o apache
sudo systemctl start apache2

#Habilitar o apache
sudo systemctl enable apache2
~~~

## Instalar e Configurar o Firewall
~~~bash
#Instalar
sudo apt install ufw -y

#Ativar
sudo ufw enable

#Permitir acesso as portas 22, 80, 443
sudo ufw allow 22
sudo ufw allow 80
sudo ufw allow 443

#Verificar status do firewall
sudo ufw status
~~~