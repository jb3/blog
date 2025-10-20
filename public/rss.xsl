<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <html>
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title><xsl:value-of select="/rss/channel/title"/> - RSS Feed</title>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.6;
            color: #333;
            background: #f5f5f5;
            min-height: 100vh;
            padding: 20px;
          }

          @media (prefers-color-scheme: dark) {
            body {
              background: #1a1a1a;
              color: #e0e0e0;
            }
          }

          .container {
            max-width: 800px;
            margin: 0 auto;
            background: white;
          }

          @media (prefers-color-scheme: dark) {
            .container {
              background: #2a2a2a;
            }
          }

          .header {
            background: #667eea;
            color: white;
            padding: 40px 30px;
            text-align: center;
          }

          @media (prefers-color-scheme: dark) {
            .header {
              background: #5568d3;
            }
          }

          .header h1 {
            font-size: 2.5em;
            margin-bottom: 10px;
            font-weight: 700;
          }

          .header p {
            font-size: 1.1em;
            opacity: 0.95;
            margin-bottom: 20px;
          }

          .rss-info {
            background: rgba(255, 255, 255, 0.2);
            padding: 15px;
            border-radius: 8px;
            margin-top: 20px;
            font-size: 0.9em;
          }

          .rss-info strong {
            display: block;
            margin-bottom: 5px;
          }

          .content {
            padding: 30px;
          }

          .item {
            padding: 25px;
            border-bottom: 1px solid #e0e0e0;
            transition: filter 0.3s ease;
          }

          .item:hover {
            filter: brightness(0.97);
          }

          @media (prefers-color-scheme: dark) {
            .item {
              border-bottom: 1px solid #404040;
            }

            .item:hover {
              filter: brightness(1.1);
            }
          }

          .item:last-child {
            border-bottom: none;
          }

          .item-title {
            font-size: 1.5em;
            margin-bottom: 10px;
          }

          .item-title a {
            color: #667eea;
            text-decoration: none;
            font-weight: 600;
            transition: filter 0.3s ease;
          }

          .item-title a:hover {
            filter: brightness(0.8);
            text-decoration: underline;
          }

          @media (prefers-color-scheme: dark) {
            .item-title a {
              color: #8b9ff5;
            }

            .item-title a:hover {
              filter: brightness(1.2);
            }
          }

          .item-meta {
            color: #666;
            font-size: 0.9em;
            margin-bottom: 15px;
            display: flex;
            gap: 15px;
            flex-wrap: wrap;
          }

          @media (prefers-color-scheme: dark) {
            .item-meta {
              color: #999;
            }
          }

          .item-meta span {
            display: inline-flex;
            align-items: center;
          }

          .item-meta span::before {
            content: "📅";
            margin-right: 5px;
          }

          .item-description {
            color: #555;
            line-height: 1.8;
          }

          @media (prefers-color-scheme: dark) {
            .item-description {
              color: #c0c0c0;
            }
          }

          .item-link {
            display: inline-block;
            margin-top: 15px;
            padding: 8px 20px;
            background: #667eea;
            color: white;
            text-decoration: none;
            border-radius: 6px;
            font-size: 0.9em;
            font-weight: 500;
            transition: filter 0.2s ease;
          }

          .item-link:hover {
            filter: brightness(0.9);
          }

          @media (prefers-color-scheme: dark) {
            .item-link {
              background: #5568d3;
            }

            .item-link:hover {
              filter: brightness(1.15);
            }
          }

          .footer {
            text-align: center;
            padding: 20px;
            background: #f8f9fa;
            color: #666;
            font-size: 0.9em;
          }

          @media (prefers-color-scheme: dark) {
            .footer {
              background: #222;
              color: #999;
            }
          }

          @media (max-width: 600px) {
            .header h1 {
              font-size: 1.8em;
            }

            .content {
              padding: 20px;
            }

            .item {
              padding: 20px 0;
            }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1><xsl:value-of select="/rss/channel/title"/></h1>
            <p><xsl:value-of select="/rss/channel/description"/></p>
            <div class="rss-info">
              <strong>📡 This is an RSS feed</strong>
              Copy the URL from your browser's address bar and paste it into your RSS reader to subscribe.
            </div>
          </div>

          <div class="content">
            <xsl:for-each select="/rss/channel/item">
              <article class="item">
                <h2 class="item-title">
                  <a href="{link}">
                    <xsl:value-of select="title"/>
                  </a>
                </h2>
                <div class="item-meta">
                  <span><xsl:value-of select="pubDate"/></span>
                </div>
                <div class="item-description">
                  <xsl:value-of select="description" disable-output-escaping="yes"/>
                </div>
                <a href="{link}" class="item-link">Read full article →</a>
              </article>
            </xsl:for-each>
          </div>

          <div class="footer">
            <p>Subscribe to this feed using your favorite RSS reader</p>
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
