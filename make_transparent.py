from PIL import Image

def remove_white_bg():
    img = Image.open('assets/logo-pajo.png').convert('RGBA')
    datas = img.getdata()
    
    new_data = []
    for item in datas:
        # If pixel is white or near white, make it completely transparent
        if item[0] > 230 and item[1] > 230 and item[2] > 230:
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)
            
    img.putdata(new_data)
    img.save('assets/logo-pajo-transparent.png', 'PNG')
    
    # Also create a pure white version for dark theme
    white_data = []
    for item in new_data:
        if item[3] > 0: # If not transparent
            white_data.append((255, 255, 255, item[3]))
        else:
            white_data.append((255, 255, 255, 0))
            
    img_white = Image.new('RGBA', img.size)
    img_white.putdata(white_data)
    img_white.save('assets/logo-pajo-white.png', 'PNG')
    
    # Also create a pure dark version for light theme
    dark_data = []
    for item in new_data:
        if item[3] > 0: # If not transparent
            dark_data.append((11, 15, 25, item[3]))
        else:
            dark_data.append((0, 0, 0, 0))
            
    img_dark = Image.new('RGBA', img.size)
    img_dark.putdata(dark_data)
    img_dark.save('assets/logo-pajo-dark.png', 'PNG')
    
    print("Done! Created logo-pajo-transparent.png, logo-pajo-white.png, and logo-pajo-dark.png with zero background rectangle.")

if __name__ == '__main__':
    remove_white_bg()
