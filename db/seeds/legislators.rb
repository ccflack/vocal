# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'json'

def raw_parts(end_point)
  Typhoeus.get(
    end_point.to_s,
    method: :get,
    params: {
      per_page: '160'
    },
    headers: {
      Accept: 'application/vnd.myiga.v1+json',
      Authorization: ENV['IGA_TOKEN'].to_s
    }
  )
end

def parser(json_response)
  JSON.parse(json_response.body)
end

def assembler(end_point)
  response = raw_parts(end_point)
  assembled = parser(response).deep_symbolize_keys
  assembled
end

def chamber_finder(proto_title)
  if proto_title == 'Senator'
    title = 'Senate'
  elsif proto_title == 'Representative'
    title = 'House'
  end
  title
end

def committees_list(proto_link)
  list = []
  assembled = assembler("https://api.iga.in.gov#{proto_link}")
  assembled[:committees].each do |committee|
    list << committee
  end
end

def authored_list(proto_link)
  assembled = assembler("https://api.iga.in.gov#{proto_link}")
  bills_link = assembled[:bills][:link]
  assembled_bills = assembler("https://api.iga.in.gov#{bills_link}")
  authored_link = assembled_bills[:authored][:link]
  assembled_authored = assembler("https://api.iga.in.gov#{authored_link}")
  list = assembled_authored[:items].each do |item|
    item
  end
  list
end

def sponsored_list(proto_link)
  assembled = assembler("https://api.iga.in.gov#{proto_link}")
  bills_link = assembled[:bills][:link]
  assembled_bills = assembler("https://api.iga.in.gov#{bills_link}")
  sponsored_link = assembled_bills[:sponsored][:link]
  assembled_sponsored = assembler("https://api.iga.in.gov#{sponsored_link}")
  list = assembled_sponsored[:items].each.map do |item|
    item
  end
  list
end

def legislator_factory(year)
  assembled = assembler("https://api.iga.in.gov/#{year}/legislators")
    n = 1
    assembled[:items][0..4].each do |proto|
    # assembled[:items].each do |proto|
      next if proto[:link] == '/2014/legislators/timothy_harman_1112'
      next if proto[:link] == '/2015/legislators/james_merritt_140'
      Legislator.create!(
        year: year,
        first_name: proto[:firstName],
        last_name: proto[:lastName],
        party: proto[:party],
        chamber: chamber_finder(proto[:position_title]),
        title: proto[:position_title],
        remote_leg_image_url: "http://iga.in.gov/legislative/#{year}/portraits/legislator_#{proto[:link].to_s[18..-1]}",
        committees: committees_list(proto[:link]),
        authored: authored_list(proto[:link]),
        sponsored: sponsored_list(proto[:link])
        )
      puts "#{year}, #{n}"
      n += 1
    end
end

legislator_factory(2016)
legislator_factory(2015)
legislator_factory(2014)
