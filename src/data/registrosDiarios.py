import time
import requests
import pandas as pd
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.firefox.options import Options
import json
import schedule

def rotinaRegistroDiarios():
    opts = Options() 
    opts.add_argument("--headless")
    driver = webdriver.Firefox(options=opts, executable_path='src/data/geckodriver.exe')

    driver.implicitly_wait(5)
    url = "https://superset.plataformatarget.com.br/superset/dashboard/microdados/"
    driver.get(url)
    time.sleep(3)


    element = driver.find_element_by_xpath('//*[@id="GRID_ID-pane-0"]/div/div/div[4]/div/div/div/div[1]/div') 
    html_content = element.get_attribute('outerHTML')

    soup = BeautifulSoup(html_content, "html.parser")

    datas = soup.findAll("td",{"data-key":"data"})
    casos_acumulados = soup.findAll("td",{"data-key":"casosAcumulados"})
    casos_novos = soup.findAll("td",{"data-key":"casosNovos"})
    descartados = soup.findAll("td",{"data-key":"descartados"})
    recuperados = soup.findAll("td",{"data-key":"recuperados"})
    obitos_acumulados = soup.findAll("td",{"data-key":"obitosAcumulados"})
    obitos_novos = soup.findAll("td",{"data-key":"obitosNovos"})


    data =[]
    for dts in datas:
        data.append(dts.get_text())
        
    caso_acumulado = []
    for sx in casos_acumulados:
        caso_acumulado.append(sx.get_text())

    caso_novo =[] 
    for idd in casos_novos:
        caso_novo.append(idd.get_text())

    descartado =[] 
    for m in descartados:
        descartado.append(m.get_text())
        
    recuperado =[] 
    for inc in recuperados:
        recuperado.append(inc.get_text())

    obito_acumulado = []
    for mc in obitos_acumulados:
        obito_acumulado.append(mc.get_text())    

    obito_novo = []
    for dp in obitos_novos:
        obito_novo.append(dp.get_text())


    d_registrosDiarios = {'data':data,'casosAcumulados':caso_acumulado, 'casosNovos':caso_novo, 'descartados': descartado,'recuperados':recuperado,'obitosAcumulados':obito_acumulado,'obitosNovos':obito_novo}
    df_registroDiarios = pd.DataFrame(data=d_registrosDiarios)

    if (df_registroDiarios.empty == True):
        driver.quit()
    else:
        registroDiarios = {}
        registroDiarios = df_registroDiarios.to_dict('records')

        js = json.dumps(registroDiarios)
        fp = open('src/data/dadosDiarios.json', 'w')
        fp.write(js)
        fp.close()
        print(df_registroDiarios)
        driver.quit() 

schedule.every(5).seconds.do(rotinaRegistroDiarios)

while True :
   schedule.run_pending()
   time.sleep(1)