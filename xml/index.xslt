<?xml version="1.0" encoding="UTF-8" ?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" indent="yes"/>
  <xsl:template match="/">
    <html lang="en-GB">
    <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
      <title>Curriculum Vitae</title>
      <style>
        body
        {
          font-family: monospace;
          font-size: normal;  
        }

        h1 { font-size: 6vh; }
        h2 { font-size: 4vh; }

        h1, h2
        {
          margin: 10px 0;
        }
      </style>
    </head>
    <body>
      <section id="contact">
        <h1><xsl:value-of select="cv/contact/@name"/></h1>
        <div><xsl:value-of select="cv/contact/@email"/>, <xsl:value-of select="cv/contact/@link"/></div>
      </section>
      <section id="employment">
        <h2>Employment</h2>
        <xsl:for-each select="cv/employment/employer">
        <div class="employer">
          <h4><xsl:value-of select="@role"/></h4>
          <div>
            <xsl:value-of select="@name"/>
            <span class="fromto">
              <xsl:value-of select="date/@from"/> – <xsl:value-of select="date/@to"/>
            </span>
          </div>
          <div><xsl:value-of select="role/@description"/></div>
          <ul>
            <xsl:for-each select="role/bullet">
              <li><xsl:value-of select="current()/@text"/></li>
            </xsl:for-each>
          </ul>
        </div>
        </xsl:for-each>
      </section>
      <section id="education">
        <h2>Education</h2>
        <xsl:for-each select="cv/education/institute">
          <div class="school">
            <h4><xsl:value-of select="@name"/></h4>
            <div>
              <xsl:value-of select="@location"/>
              <span class="fromto">
                <xsl:value-of select="date/@from"/> – <xsl:value-of select="date/@to"/>
              </span>
            </div>
            <div><xsl:value-of select="courses/@display"/></div>
            <ul>
              <xsl:for-each select="courses/course">
                <li><xsl:value-of select="@name"/>, <xsl:value-of select="@level"/></li>
              </xsl:for-each>
            </ul>
        </div>
        </xsl:for-each>
      </section>
      <section id="interests">
        <h2>Interests</h2>
      </section>
    </body>
    </html>
  </xsl:template>
  </xsl:stylesheet>