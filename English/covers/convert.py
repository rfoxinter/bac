from os import system as s
from os import listdir as l
from os.path import splitext as sp

covers=[]
for i in l('.'):
    if sp(i)[1]=='.jpg':
        covers.append(i)
        
for i in covers:
    s('magick '+i+' -resize 175 -define webp:lossless=true '+sp(i)[0]+'.webp')
    s('magick '+i+' -resize 175 -define webp:lossless=true -evaluate Multiply 0.5 '+sp(i)[0]+'_dark.webp')

#convert ia.webp -evaluate Multiply 0.5 ia2.webp
#convert ia.webp -level 1,50% ia3.webp