
## Instalação

Instale zabbix-template-xoa com Zabbix Agent 2.0

```bash
# Clone o repositório
cd /etc/zabbix/zabbix_agent2.d
git clone https://github.com/natanielnfs/zabbix-template-xoa Xoa_template

# Configure o suporte para o agente 2.0
echo "UserParameter=xoa.backups.logs[*],/usr/bin/node /etc/zabbix/zabbix_agent2.d/Xoa_template/scripts/xoa-client/xoa.backups.logs.js
UserParameter=xoa.backups.logs.param[*],/usr/bin/node /etc/zabbix/zabbix_agent2.d/Xoa_template/scripts/xoa-client/xoa.backups.logs.param.js $1 $2" > /etc/zabbix/zabbix_agent2.d/Xoa_template/Userparameters/xoatemplate.conf

echo "Include=/etc/zabbix/zabbix_agent2.d/Xoa_template/Userparameters/*.conf" >> /etc/zabbix/zabbix_agent2.conf
```

Instale zabbix-template-xoa com Zabbix Agent 1.0

```bash
# Clone o repositório
cd /etc/zabbix/zabbix_agentd.d
git clone https://github.com/natanielnfs/zabbix-template-xoa Xoa_template

# Configure o suporte para o agente
echo "Include=/etc/zabbix/zabbix_agentd.d/Xoa_template/Userparameters/*.conf" >> /etc/zabbix/zabbix_agent.conf
```
