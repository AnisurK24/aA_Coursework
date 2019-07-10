class LruCache
  def initialize(max_length)
    @cache = []
    @max_length = max_length
  end

  def count
    @cache.count
  end

  def add(el)
    if @cache.include?(el)
      @cache.delete(el)
      @cache << el
    elsif count >= @max_length
      @cache.shift
      @cache << el
    else
      @cache << el
    end
  end

  def show
    p @cache
  end

end