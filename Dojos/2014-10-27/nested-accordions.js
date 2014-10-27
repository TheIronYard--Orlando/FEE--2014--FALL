function addOpenClass(element){
  element.className = 'accordion-open';
}

function remOpenClass(element){
  element.className = '';
}

/**
 * @param HTMLElement element
 * @return Boolean whether `element` has `className` of "accordion-open"
 */
function hasOpenClass(element){
  if ( element.className === 'accordion-open' ){
    return true;
  }

  return false;
}

function toggleOpenClass(element){
  if ( hasOpenClass(element) ){
      return remOpenClass(element);
  }

  addOpenClass(element);
}