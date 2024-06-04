const parseContactType = (contactType) => {
  const isKnownType = ['home', 'work', 'personal'].includes(contactType);
  if (isKnownType) return contactType;
  return 'personal';
};
const parseIsFavourite = (isFavourite) => {
  if (isFavourite === 'true') return true;
  if (isFavourite === 'false') return false;
  return false;
};

export const parseFilterParams = (filter) => {
  const parsedFilter = {
    ...filter,
    contactType: parseContactType(filter.contactType),
    isFavourite: parseIsFavourite(filter.isFavourite),
  };
  return parsedFilter;
};
