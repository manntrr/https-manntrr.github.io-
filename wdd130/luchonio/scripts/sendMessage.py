from js import console
  
def sendMessage(*args, **kwargs):
  
    #print('args:', args)
    #print('kwargs:', kwargs)
  
    console.log(f'args: {args}')
    console.log(f'kwargs: {kwargs}')
      
    text = f"name:  {Element('name').element.value}"
    text = f"{text}; e-mail:  {Element('mail').element.value}"
    text = f"{text}; msg:  {Element('msg').element.value}"
    text = f"{text}; dateTime:  {dt.datetime.now().strftime('%H:%M:%S on %A %B %d, %Y')}"
  
    #print('text:', text)
    console.log(f'text: {text}')
  
    #Element('feedback').element.innerText = text
    pyscript.write('pyFeedback', text)
