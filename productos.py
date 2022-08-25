from textwrap import indent
import requests
from bs4 import BeautifulSoup
import time, json
producto = input("Digite el nombre del producto: ")

url = "https://www.amazon.es/s?k="+producto

start_time = time.time()
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36'}


peticion_http = requests.get(url, headers=headers)  # <Response [200]>


contenido_pagina = BeautifulSoup(peticion_http.content, "html.parser")


resultado_busqueda = contenido_pagina.find_all(
    'div', {'data-component-type': 's-search-result'})
# #Nos devuelve un array [resultado_busqueda]


def ObtenerDescripcion(link):

    peticion_http = requests.get(link, headers=headers)  # <Response [200]>
    contenido_pagina = BeautifulSoup(peticion_http.content, "html.parser")
    resultado_producto = contenido_pagina.find(
        'table', {'id': 'productDetails_techSpec_section_1'})

    # Detalles técnicos del  producto.
    fila1 = resultado_producto.find_all('th')  # Nos devueve un array
    fila2 = resultado_producto.find_all('td')  # Nos devueve un array

    # Acerca de este producto
    acerca_producto = contenido_pagina.find('div', {'id': 'feature-bullets'})
    acerca_producto = acerca_producto.ul
    acerca_producto = acerca_producto.find_all('li')  # Nos devueve un array

    # Obtenemos la primera imagen grande.
    imagen = contenido_pagina.find('div', {'id': 'imageBlock'})
    # Nos devuelve un array con una longitud de 2.
    imagen = imagen.find_all("ul")
    imagen = imagen[1].find("li", {"class": "itemNo0"})

    primera_imagen = imagen.img.get("src")

    return (fila1, fila2, acerca_producto, primera_imagen)


def getInfoItems(item):

   
    titulo = item.h2.a.text


    try:
        precio = item.find("span", "a-offscreen").text
    except:
        precio = "0"

    link = "https://www.amazon.es/" + item.h2.a.get("href")

    return (titulo, precio, ObtenerDescripcion(link))


infoallItems = []

i = 0 
for item in resultado_busqueda:
    i += 1
    infoallItems.append(getInfoItems(item))
    if i== 2: 
        break
    
# print(len(resultado_busqueda))
#print(infoallItems[1])

data = json.dumps({"item":[{"title": infoallItems[1][0], "precio": infoallItems[1][1]}] }, indent=4)
with open('amazon-products', 'w') as f: 
    f.write(data)
 


print("--- %s seconds ---" % (time.time() - start_time))



