class V1::GreetingsController < ApplicationController
  def index
    greeting = Greeting.all.order('random()').first
    render json: {
      greeting: greeting.message
    }.to_json
  end
end
