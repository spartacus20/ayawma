import requests
from bs4 import BeautifulSoup

# producto = input("Digite el nombre del producto: ")

# url = "https://www.amazon.es/s?k="+producto


headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36'}


# peticion_http = requests.get(url, headers= headers) # <Response [200]> 


# contenido_pagina = BeautifulSoup(peticion_http.content, "html.parser")


# resultado_busqueda = contenido_pagina.find_all('div', {'data-component-type': 's-search-result'}) 
# #Nos devuelve un array [resultado_busqueda]


def ObtenerDescripcion(link):
    
    
    peticion_http = requests.get(link, headers= headers) # <Response [200]> 
    contenido_pagina = BeautifulSoup(peticion_http.content, "html.parser")
    resultado_producto = contenido_pagina.find('table' , {'id': 'productDetails_techSpec_section_1'}) 

    #Detalles técnicos del  producto. 
    fila1 =  resultado_producto.find_all('th') #Nos devueve un array 
    fila2 =  resultado_producto.find_all('td') #Nos devueve un array 

    #Acerca de este producto
    acerca_producto = contenido_pagina.find('div', {'id': 'feature-bullets'})
    acerca_producto = acerca_producto.ul
    acerca_producto = acerca_producto.find_all('li') #Nos devueve un array 
    
    imagen = contenido_pagina.find('div', {'id': 'imageBlock'})
    imagen = imagen.ul
    imagen = imagen.find_all("li") #Nos devueve un array 
    imagen_pequena = imagen[2].span.img.get('src') 
    
 #   imagen = imagen.find_all('li', {'class': 'imageThumbnail'})




    print(imagen)

ObtenerDescripcion("https://www.amazon.es/Gamine-MKMINIBES-Teclado-Mec%C3%A1nico-Ultra-Compacto/dp/B0972ZH4KN/ref=sr_1_3_sspa?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1G7CXWU12IQX3&keywords=teclados&qid=1660909880&sprefix=teclados%2Caps%2C108&sr=8-3-spons&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExOVI5MElGNzdFVzNXJmVuY3J5cHRlZElkPUEwNTU3MTgzM0haU0FGOENKN0tPTyZlbmNyeXB0ZWRBZElkPUEwNzA5MTIyR1BGTDFCOFFBNlNUJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ&th=1")




# for item in resultado_busqueda:
#     titulo = item.h2.a.text
    
#     try:
#         precio = item.find("span", "a-offscreen").text
#     except: 
#         precio = "0"

#     link = "https://www.amazon.es/"+ item.h2.a.get("href")


    
#     print(link)


 










