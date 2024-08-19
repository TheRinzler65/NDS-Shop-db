share_link = input("Enter the Google Drive share link: ")
try:
    file_id = share_link.split('/d/')[1].split('/')[0]
    

    direct_link = f"https://drive.google.com/uc?export=download&id={file_id}"
    
    print("Direct download link: ", direct_link)
except IndexError:
    print("Invalid link. Please make sure the link is correct.")