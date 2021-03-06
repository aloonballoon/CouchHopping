json.users do
  @hosts.each do |host|
    json.set! host.id do
      json.location host.location
      json.extract! host, :id, :username, :email, :first_name, :last_name, :user_status, :bio, :age, :home_location_id
      if host.photo.attached?
        json.photoUrl url_for(host.photo)
      end

    end
  end
end
