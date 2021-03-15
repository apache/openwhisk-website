def main(params = {})
  name = params['name'] || 'stranger'
  greeting = "Hello #{name}!"
  { "greeting": greeting }
end
