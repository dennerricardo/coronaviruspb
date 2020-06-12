import time
import requests
import pandas as pd
from bs4 import BeautifulSoup
from selenium.webdriver.firefox.options import Options 
from selenium import webdriver
import json
import schedule


def cidadeRotina() :
   
   opts = Options() 
   opts.add_argument("--headless")
   driver = webdriver.Firefox(options=opts, executable_path='src/data/geckodriver.exe')

   driver.implicitly_wait(5)
   url = "https://superset.plataformatarget.com.br/superset/dashboard/55/"
   driver.get(url)
   time.sleep(3)

   element_city = driver.find_element_by_xpath("//*[@id='DataTables_Table_0']")
   html_content_city = element_city.get_attribute('outerHTML')

   soup_city = BeautifulSoup(html_content_city, "html.parser")
   cidades = soup_city.findAll("td",{"data-key":"city"})
   cidades_casos = soup_city.findAll("td",{"data-key":"Casos"})
   cidades_obitos = soup_city.findAll("td",{"data-key":"Óbitos"})

   cidade =[]
   for c in cidades:
      cidade.append(c.get_text())

   caso_cidade =[]

   for cc in cidades_casos:
      caso_cidade.append(cc.get_text())

   obitos =[]
   for co in cidades_obitos:
      obitos.append(co.get_text())


   d_city = {'nome':cidade, 'quantidadeCasos':caso_cidade, 'quantidadeObitos':obitos}
   df_city = pd.DataFrame(data=d_city)

   if (df_city.empty == True):
      driver.quit()
   else:
      dadosCidades = {}
      dadosCidades = df_city.to_dict('records')
      
      js = json.dumps(dadosCidades)
      fp = open('src/data/dadosCidades.json', 'w')
      fp.write(js)
      fp.close()
      print(df_city)
      driver.quit() 
      # time.sleep(5)


  

schedule.every(5).seconds.do(cidadeRotina)

while True :
   schedule.run_pending()
   time.sleep(1)