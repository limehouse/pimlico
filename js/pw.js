const me = {
  contact : {
    fname : "Phillip",
    sname : "Webb",
    phone : "01480 878135",
    email : "phillip@londonbusred.co.uk"
  },
  employment : [
    {
      employer : "Assured Information Systems Limited",
      role : "Software Support Analyst",
      from : "2013-11",
      to : "Present",
      description : "In this role I provide support to users of our human and veterinary pharmacovigilance software from a global customer base served by domestic and foreign public health agencies and the pharmaceutical and life sciences industries.",
      bullets : [
        "Prioritising and managing support requests until resolved",
        "Troubleshooting Microsoft RDS RemoteApp problems",
        "Querying and updating Oracle Database to resolve customer issues",
        "Preparing and distributing monthly issues reports to customers",
        "I have developed several small applications used by my co-workers"
      ]
    },
    {
      employer : "Tensor plc",
      role : "Helpdesk Analyst",
      from : "2010-02",
      to : "2013-10",
      description : "Application and hardware support for customers using Tensor time and attendance, access control, personnel and energy management systems. Security vetted as non-police personnel by West Midlands Police.",
      bullets : [
        "Microsoft SQL and MSDE database configuration and support",
        "Hardware installation advice given to electrical engineers",
        "Firmware and software upgrades performed using remote access tools",
        "Application server migration and software installation support"
      ]
    },
    {
      employer : "NHS Anglia Support Partnership",
      role : "Service Desk Analyst",
      from : "2010-02",
      to : "2010-07",
      description : "First line service desk role delivering IT and Facilities support to NHS Strategic Health Authority and Primary Care Trust staff across the Anglia region.",
      bullets : [
        "Microsoft Windows Active Directory account administration",
        "Microsoft Exchange 2007 account management via OWA",
        "NHS Trust IT and email policy enforcement",
        "Microsoft Office 2003/2007 application support"
      ]
    },
    {
      employer : "Itim Limited",
      role : "Software Support Analyst",
      from : "2006-12",
      to : "2010-02",
      description : "First and second line support role, including out-of-hours support for retailers in the UK and Europe using Itim end-to-end retail applications.",
      bullets : [
        "EFT and EPoS software and hardware support for floor and back office staff",
        "Responsible for EPoS provision and management for new and refitted stores",
        "Incident resolution using remote access applications",
        "Microsoft SQL and DP4 database management"
      ]
    },
    {
      employer : "iCare UK Limited",
      role : "Support Technician",
      from : "2005-05",
      to : "2006-11",
      description : "IT support role for UK and European customers in a small office or home environment. In addition to this role I provided administrative support to Sales staff.",
      bullets : [
        "Microsoft Windows and Office application support",
        "Maintaining accurate records of customer requests, incidents and assets",
        "Producing quotes, invoices and contracts for scheduled work",
        "Giving technical sales advice to customers"
      ]
    }
  ],
  education : [
    {
      institute : "The Open University",
      location : "Milton Keynes, Buckinghamshire",
      from : "2014-02",
      to : "Present",
      courses : [
        {
          name : "My Digital Life (TU100)",
          level : ""
        },
        {
          name : "Technologies in Practice (TM129)",
          level : ""
        },
        {
          name : "Discovering Mathematics (MU123)",
          level : ""
        },
        {
          name : "Object-oriented Java Programming (M250)",
          level : ""
        }
      ]
    },
    {
      institute : "Peterborough Regional College",
      location : "Peterborough, Cambridgeshire",
      from : "1999-09",
      to : "2003",
      courses : [
        {
          name : "Information & Communication Technology",
          level : "GNVQ Intermediate"
        },
        {
          name : "Sports, Recreation and Allied Occupations Leadership",
          level : "NVQ Level 2"
        },
        {
          name : "Adult Numeracy",
          level : "NVQ Level 1"
        }
      ]
    },
    {
      institute : "Ernulf Community School",
      location : "St. Neots, Cambridgeshire",
      from : "1993-09",
      to : "1998",
      courses : [
        {
          name : "English Language",
          level : "GCSE"
        },
        {
          name : "English Literature",
          level : "GCSE"
        },
        {
          name : "English Speaking & Listening",
          level : "GCSE"
        },
        {
          name : "Integrated Humanities",
          level : "GCSE"
        },
        {
          name : "Mathematics",
          level : "GCSE"
        },
        {
          name : "Music",
          level : "GCSE"
        },
        {
          name : "Science, Double Award",
          level : "GCSE"
        },
        {
          name : "Theatre Studies",
          level : "GCSE"
        }
      ]
    }
  ],
  interests : [
    "For the past 17 years I have regularly played inline hockey with a local skating club. As a member of the club committee I am responsible for providing email and web hosting services and maintenance of email distribution lists. Players have access to an online RSVP system, which I developed using PHP and MySQL. I am also responsible for the maintenance of this system.",
    "I have a broad interest in IT related fields and take particular interest in IT security and Linux related news."
  ],
  months : [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ],
  getPeriod : function(datePeriod)
  {
    var d, v;
    if (datePeriod == "Present")
    {
      v = datePeriod;
    }
    else
    {
      d = new Date(datePeriod);
      v = this.months[d.getMonth()] + ", " + d.getFullYear();
    }
    return v;
  },
  getDuration : function(dateFrom, dateTo)
  {
    let from = new Date(dateFrom);
    let to = (dateTo == "Present") ? new Date() : new Date(dateTo); // use today's date if to is 'Present'

    let monthsCalc = to.getMonth() - from.getMonth();
    let yearsCalc = (12 * (to.getFullYear() - from.getFullYear()));
    let monthsTotal = monthsCalc + yearsCalc;

    return { "years" : Math.floor(monthsTotal / 12), "months" : monthsTotal%12 };
  },
  getContact : function()
  {
    return this.contact;
  },
  getEmployers : function()
  {
    return this.employment;
  },
  getEducators : function()
  {
    return this.education;
  },
  getInterests : function()
  {
    return this.interests;
  }
}

function addItem(id, val)
{
  document.getElementById(id).insertAdjacentHTML("beforeend", val);
}

/**
 * Build the page using me elements
 */
addItem("name", `${me.getContact().fname} ${me.getContact().sname}`);
addItem("phone", `phone: ${me.getContact().phone},`);
addItem("email", `email: ${me.getContact().email}`);

me.getEmployers().forEach(function(j) {
  addItem("employment", `
  <div class="job">
    <h4>${j.role}</h4>
    <div>${j.employer}<span class="fromto">${me.getPeriod(j.from)} &ndash; ${me.getPeriod(j.to)}</span></div>
    <div>${j.description}</div>
    <div><ul><li>${j.bullets.join("</li><li>")}</li></div>
  </div>`)
});

me.getEducators().forEach(function(e) {
  let course = e.courses.map(function(c) { return });
  addItem("education", `
  <div class="school">
    <h4>${e.institute}</h4>
    <div>${e.location}<span class="fromto">${me.getPeriod(e.from)} &ndash; ${me.getPeriod(e.to)}</span></div>
    <div>
      <ul>
        <li>${e.courses.map(function(c) { return c.name.concat(", ", c.level) }).join("</li><li>")}</li>
      </ul>
    </div>
  </div>`)
});

me.getInterests().forEach(function(i) {
  addItem("interests", `<p>${i}</p>`);
});