share_link = input("Entrez le lien de partage Google Drive : ")
try:
    file_id = share_link.split('/d/')[1].split('/')[0]
    

    direct_link = f"https://drive.google.com/uc?export=download&id={file_id}"
    
    print("Lien direct de téléchargement : ", direct_link)
except IndexError:
    print("Lien invalide. Assurez-vous que le lien est correct.")