const createCardElement = ({title, description}) => {
  const card = document.createElement('div');
  card.classList.add('card', 'm-3');
  card.setAttribute('style', 'width: 18rem;');
  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');
  const titleElement = document.createElement('h5');
  titleElement.classList.add('card-title');
  titleElement.textContent = title;
  const descriptionElement = document.createElement('p');
  descriptionElement.classList.add('card-text');
  descriptionElement.textContent = description;
  const removeButton = document.createElement('button');
  removeButton.classList.add('btn', 'btn-danger', 'm-1');
  removeButton.textContent = 'remove';

  const moveToTopButton = document.createElement('button');
  moveToTopButton.classList.add('btn', 'btn-primary', 'm-1');
  moveToTopButton.textContent = 'top priority';

  const moveToUnderstooButton = document.createElement('button');
  moveToUnderstooButton.classList.add('btn', 'btn-success', 'm-1');
  moveToUnderstooButton.textContent = 'I get this.';

  card.append(cardBody);
  cardBody.append(titleElement);
  cardBody.append(descriptionElement);
  cardBody.append(removeButton);
  cardBody.append(moveToTopButton);
  cardBody.append(moveToUnderstooButton);

  return card;
};

export {createCardElement};
