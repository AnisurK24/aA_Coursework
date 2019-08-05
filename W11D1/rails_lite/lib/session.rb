require 'json'

class Session
  # find the cookie for this app
  # deserialize the cookie into a hash
  def initialize(req)
    ivar = req.cookies["_rails_lite_app"]
    if ivar
      @var = JSON.parse(ivar)
    else
      @var = {}
    end
  end

  def [](key)
    @var[key]
  end

  def []=(key, val)
    @var[key] = val
  end

  # serialize the hash into json and save in a cookie
  # add to the responses cookies
  def store_session(res)
    cookie = {path: "/", value: @var.to_json}
    res.set_cookie("_rails_lite_app", cookie)
  end
end
