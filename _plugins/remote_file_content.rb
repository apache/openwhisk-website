require 'net/http'
require 'uri'

module Jekyll
  class RemoteFileContent < Liquid::Tag
    def initialize(tag_name, markup, tokens)
      url = markup

      puts "Fetching content of url: #{url}"

      if url =~ URI::DEFAULT_PARSER.make_regexp
        @content = fetchContent(url)
      else
        raise 'Invalid URL passed to RemoteFileContent'
      end

      super
    end

    def render(_context)
      @content || raise('Something went wrong in RemoteFileContent')
    end

    def fetchContent(url)
      Net::HTTP.get(URI.parse(URI.encode(url.strip)))
    end
  end
end

Liquid::Template.register_tag('remotefile', Jekyll::RemoteFileContent)
