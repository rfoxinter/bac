#Créer un fichier poem.txt avec le texte du poème

def main():
    lire=open('poem.txt','r')
    lignes=lire.readlines()
    for i in range(len(lignes)):
        ligne=lignes[i]
        ligne=ligne.replace('\n','')
        ligne=ligne.replace('â€”','—')
        ligne=ligne.replace("'",'’')
        ligne=ligne.replace('â€™','’')
        ligne=ligne.replace('"','“')
        ligne=ligne.replace('â€˜','‘')
        if ligne=='':
            print('        </br class="poem">')
        else:
            print('        <p class="poem">'+ligne+'</p>')

if __name__=='__main__':
    main()
