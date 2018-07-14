export const fetchUser = (id) => {
  return $.ajax({
    method: 'get',
    url: `api/users/${id}`
  });
};

export const updateStatus = (user) => {
  return $.ajax({
    method: 'patch',
    url: `api/users/${user.id}`,
    data: {user: user}
  });
};
