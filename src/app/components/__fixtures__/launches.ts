/* eslint-disable */
export const launches = [
  {
    details:
      "The 11th operational batch of Starlink satellites (12th overall) will lift off from LC-39A at Kennedy Space Center, Florida on a Falcon 9 rocket. In the weeks following deployment the Starlink satellites will use onboard ion thrusters to reach their operational altitude of 550 km. This is the third batch of Starlink satellites which all feature visors intended to reduce their visibility from Earth. Falcon 9's first stage will attempt to land on a drone ship approximately 628 km downrange, its sixth landing overall, and a ships is in place to attempt the recovery of both payload fairing halves.",
    id: '102',
    is_tentative: false,
    launch_date_local: '2020-09-03T08:46:00-04:00',
    launch_date_unix: 1599137160,
    launch_date_utc: '2020-09-03T12:46:00.000Z',
    launch_site: {
      site_id: 'ksc_lc_39a',
      site_name_long: 'Kennedy Space Center Historic Launch Complex 39A',
      site_name: 'KSC LC 39A',
    },
    launch_success: true,
    launch_year: '2020',
    links: {
      article_link: null,
      flickr_images: [],
      mission_patch_small: 'https://images2.imgbox.com/9a/96/nLppz9HW_o.png',
      mission_patch: 'https://images2.imgbox.com/d2/3b/bQaWiil0_o.png',
      presskit: null,
      reddit_campaign:
        'https://www.reddit.com/r/spacex/comments/i63bst/starlink_general_discussion_and_deployment_thread/',
      reddit_launch:
        'https://www.reddit.com/r/spacex/comments/iip8h3/rspacex_starlink11_launch_discussion_updates/',
      reddit_media: null,
      reddit_recovery: null,
      video_link: 'https://youtu.be/_j4xR7LMCGY',
      wikipedia: null,
    },
    mission_id: [],
    mission_name: 'Starlink-11 (v1.0)',
    rocket: {
      fairings: {
        recovered: null,
        recovery_attempt: true,
        reused: null,
        ship: 'GOMSTREE',
      },
      first_stage: {
        cores: [
          {
            block: 5,
            core: {
              asds_attempts: 2,
              asds_landings: 2,
              block: 5,
              id: 'B1060',
              missions: [
                { flight: 97, name: 'GPS III SV03 (Columbus)' },
                { flight: 102, name: 'Starlink-11 (v1.0)' },
              ],
              original_launch: '2020-06-30T19:55:00.000Z',
              reuse_count: 1,
              rtls_attempts: 0,
              rtls_landings: 0,
              status: 'unknown',
              water_landing: false,
            },
            flight: 2,
            gridfins: true,
            land_success: true,
            landing_intent: true,
            landing_type: 'ASDS',
            landing_vehicle: 'OCISLY',
            legs: true,
            reused: true,
          },
        ],
      },
      rocket_name: 'Falcon 9',
      rocket_type: 'FT',
      rocket: { id: 'falcon9' },
      second_stage: { block: 5, payloads: [{ id: null }] },
    },
    static_fire_date_unix: null,
    static_fire_date_utc: null,
    telemetry: { flight_club: null },
    tentative_max_precision: 'hour',
    upcoming: false,
    ships: [{ id: 'GOMSTREE' }, { id: 'GOQUEST' }],
  },
  {
    details:
      "SpaceX's Falcon 9 will launch the second of the two satellite SAOCOM 1 satellites into a sun-synchronous polar orbit from SLC-40, Cape Canaveral AFS. SAOCOM 1B is a synthetic aperture radar Earth observation satellite to support disaster management. The SAOCOM spacecraft are operated by CONAE, the Argentinian National Space Activities Commission, and are built by INVAP. This mission is also expected to include rideshare payloads Sequoia, and GNOMES-1. This will be the first polar launch from the Space Coast in 60 years. The launch azimuth will be southward and the booster will land at LZ-1.",
    id: '101',
    is_tentative: false,
    launch_date_local: '2020-08-30T19:18:00-04:00',
    launch_date_unix: 1598829480,
    launch_date_utc: '2020-08-30T23:18:00.000Z',
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name_long:
        'Cape Canaveral Air Force Station Space Launch Complex 40',
      site_name: 'CCAFS SLC 40',
    },
    launch_success: true,
    launch_year: '2020',
    links: {
      article_link:
        'https://spaceflightnow.com/2020/08/31/spacex-launches-first-polar-orbit-mission-from-florida-in-decades/',
      flickr_images: [
        'https://live.staticflickr.com/65535/50291453997_aa715950e7_o.jpg',
        'https://live.staticflickr.com/65535/50291306296_85b6ff12a2_o.jpg',
        'https://live.staticflickr.com/65535/50291306061_2f9e350a85_o.jpg',
        'https://live.staticflickr.com/65535/50291306216_4fd44c261e_o.jpg',
        'https://live.staticflickr.com/65535/50291306346_136d3dce7b_o.jpg',
      ],
      mission_patch_small: 'https://images2.imgbox.com/e7/f6/v0zFOhZE_o.png',
      mission_patch: 'https://images2.imgbox.com/43/33/36WPntCu_o.png',
      presskit: null,
      reddit_campaign:
        'https://www.reddit.com/r/spacex/comments/ffoz5r/saocom_1b_launch_campaign_thread/',
      reddit_launch:
        'https://www.reddit.com/r/spacex/comments/iiwlch/rspacex_saocom_1b_launch_discussion_updates_thread/',
      reddit_media: null,
      reddit_recovery: null,
      video_link: 'https://youtu.be/P-gLOsDjE3E',
      wikipedia: 'https://en.wikipedia.org/wiki/SAOCOM',
    },
    mission_id: [],
    mission_name: 'SAOCOM 1B, GNOMES-1, Tyvak-0172',
    rocket: {
      fairings: {
        recovered: null,
        recovery_attempt: true,
        reused: null,
        ship: 'GOMSCHIEF',
      },
      first_stage: {
        cores: [
          {
            block: 5,
            core: {
              asds_attempts: 2,
              asds_landings: 2,
              block: 5,
              id: 'B1059',
              missions: [
                { flight: 85, name: 'CRS-19' },
                { flight: 91, name: 'CRS-20' },
                { flight: 96, name: 'Starlink-8 & SkySat 16-18' },
                { flight: 101, name: 'SAOCOM 1B, GNOMES-1, Tyvak-0172' },
              ],
              original_launch: '2019-12-05T17:29:23.000Z',
              reuse_count: 3,
              rtls_attempts: 2,
              rtls_landings: 2,
              status: 'unknown',
              water_landing: false,
            },
            flight: 4,
            gridfins: true,
            land_success: true,
            landing_intent: true,
            landing_type: 'RTLS',
            landing_vehicle: 'LZ-1',
            legs: true,
            reused: true,
          },
        ],
      },
      rocket_name: 'Falcon 9',
      rocket_type: 'FT',
      rocket: { id: 'falcon9' },
      second_stage: { block: 5, payloads: [{ id: null }] },
    },
    static_fire_date_unix: null,
    static_fire_date_utc: null,
    telemetry: { flight_club: null },
    tentative_max_precision: 'hour',
    upcoming: false,
    ships: [{ id: 'GOMSCHIEF' }],
  },
  {
    details:
      'This mission will launch the tenth batch of operational Starlink satellites, which are expected to be version 1.0, from LC-39A, Kennedy Space Center. It is the eleventh Starlink launch overall. The satellites will be delivered to low Earth orbit and will spend a few weeks maneuvering to their operational altitude of 550 km. This mission is includes rideshare payloads, SkySats 19-21, on top of the Starlink stack. The booster for this mission is expected to land on an ASDS.',
    id: '100',
    is_tentative: false,
    launch_date_local: '2020-08-18T10:31:00-04:00',
    launch_date_unix: 1597761060,
    launch_date_utc: '2020-08-18T14:31:00.000Z',
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name_long:
        'Cape Canaveral Air Force Station Space Launch Complex 40',
      site_name: 'CCAFS SLC 40',
    },
    launch_success: true,
    launch_year: '2020',
    links: {
      article_link:
        'https://spaceflightnow.com/2020/08/18/spacex-adds-more-satellites-to-ever-growing-starlink-network/',
      flickr_images: [
        'https://live.staticflickr.com/65535/50241845831_9a7412e81d_o.jpg',
        'https://live.staticflickr.com/65535/50242057637_ea4f98d517_o.jpg',
        'https://live.staticflickr.com/65535/50242057682_6084977bf7_o.jpg',
        'https://live.staticflickr.com/65535/50242057677_e96fbd46e6_o.jpg',
      ],
      mission_patch_small: 'https://images2.imgbox.com/9a/96/nLppz9HW_o.png',
      mission_patch: 'https://images2.imgbox.com/d2/3b/bQaWiil0_o.png',
      presskit: null,
      reddit_campaign:
        'https://www.reddit.com/r/spacex/comments/i63bst/starlink_general_discussion_and_deployment_thread/',
      reddit_launch:
        'https://www.reddit.com/r/spacex/comments/ibacxz/rspacex_starlink10_launch_discussion_updates/',
      reddit_media:
        'https://www.reddit.com/r/spacex/comments/ic29wg/rspacex_starlink10_media_thread_photographer/',
      reddit_recovery:
        'https://www.reddit.com/r/spacex/comments/ic46fw/starlink10_recovery_updates_discussion_thread/',
      video_link: 'https://youtu.be/jTMJK7wb0rM',
      wikipedia: 'https://en.wikipedia.org/wiki/Starlink',
    },
    mission_id: [],
    mission_name: 'Starlink-10 (v1.0) & SkySat 19-21',
    rocket: {
      fairings: {
        recovered: true,
        recovery_attempt: true,
        reused: true,
        ship: 'GOMSTREE',
      },
      first_stage: {
        cores: [
          {
            block: 5,
            core: {
              asds_attempts: 6,
              asds_landings: 6,
              block: 5,
              id: 'B1049',
              missions: [
                { flight: 68, name: 'Telstar 18V' },
                { flight: 74, name: 'Iridium NEXT Mission 8' },
                { flight: 79, name: 'Starlink v0.9' },
                { flight: 87, name: 'Starlink 2' },
                { flight: 95, name: 'Starlink 7' },
                { flight: 100, name: 'Starlink-10 (v1.0) & SkySat 19-21' },
              ],
              original_launch: '2018-09-10T04:45:00.000Z',
              reuse_count: 5,
              rtls_attempts: 0,
              rtls_landings: 0,
              status: 'unknown',
              water_landing: false,
            },
            flight: 6,
            gridfins: true,
            land_success: true,
            landing_intent: true,
            landing_type: 'ASDS',
            landing_vehicle: 'OCISLY',
            legs: true,
            reused: true,
          },
        ],
      },
      rocket_name: 'Falcon 9',
      rocket_type: 'FT',
      rocket: { id: 'falcon9' },
      second_stage: { block: 5, payloads: [{ id: null }] },
    },
    static_fire_date_unix: null,
    static_fire_date_utc: null,
    telemetry: { flight_club: null },
    tentative_max_precision: 'hour',
    upcoming: false,
    ships: [
      { id: 'GOMSTREE' },
      { id: 'GOMSCHIEF' },
      { id: 'OCISLY' },
      { id: 'GOQUEST' },
    ],
  },
  {
    details:
      'This mission will launch the ninth batch of operational Starlink satellites, which are expected to be version 1.0, from LC-39A, Kennedy Space Center. It is the tenth Starlink launch overall. The satellites will be delivered to low Earth orbit and will spend a few weeks maneuvering to their operational altitude of 550 km. This mission is includes a rideshare of two BlackSky satellites on top of the Starlink stack. The booster for this mission is expected to land an ASDS.',
    id: '99',
    is_tentative: false,
    launch_date_local: '2020-08-07T01:12:00-04:00',
    launch_date_unix: 1596777120,
    launch_date_utc: '2020-08-07T05:12:00.000Z',
    launch_site: {
      site_id: 'ksc_lc_39a',
      site_name_long: 'Kennedy Space Center Historic Launch Complex 39A',
      site_name: 'KSC LC 39A',
    },
    launch_success: true,
    launch_year: '2020',
    links: {
      article_link:
        'https://spaceflightnow.com/2020/08/07/spacex-closes-out-busy-week-with-launch-of-more-starlink-satellites',
      flickr_images: [
        'https://live.staticflickr.com/65535/50198901143_0bb53a499e_o.jpg',
        'https://live.staticflickr.com/65535/50199448011_35d0e9c8bf_o.jpg',
        'https://live.staticflickr.com/65535/50199715777_eca6f41d25_o.jpg',
      ],
      mission_patch_small: 'https://images2.imgbox.com/9a/96/nLppz9HW_o.png',
      mission_patch: 'https://images2.imgbox.com/d2/3b/bQaWiil0_o.png',
      presskit: null,
      reddit_campaign:
        'https://www.reddit.com/r/spacex/comments/h8mold/starlink9_launch_campaign_thread/',
      reddit_launch:
        'https://www.reddit.com/r/spacex/comments/i4ozw3/rspacex_starlink9_launch_discussion_updates/',
      reddit_media:
        'https://www.reddit.com/r/spacex/comments/hg499n/rspacex_starlink9_media_thread_photographer/',
      reddit_recovery:
        'https://www.reddit.com/r/spacex/comments/i5smhk/starlink_9blacksky_recovery_thread/',
      video_link: 'https://youtu.be/KU6KogxG5BE',
      wikipedia: 'https://en.wikipedia.org/wiki/Starlink',
    },
    mission_id: [],
    mission_name: 'Starlink-9 (v1.0) & BlackSky Global 5-6',
    rocket: {
      fairings: {
        recovered: true,
        recovery_attempt: true,
        reused: null,
        ship: 'GOMSTREE',
      },
      first_stage: {
        cores: [
          {
            block: 5,
            core: {
              asds_attempts: 4,
              asds_landings: 4,
              block: 5,
              id: 'B1051',
              missions: [
                { flight: 76, name: 'CCtCap Demo Mission 1' },
                { flight: 80, name: 'RADARSAT Constellation' },
                { flight: 89, name: 'Starlink 3' },
                { flight: 93, name: 'Starlink 6' },
                { flight: 99, name: 'Starlink-9 (v1.0) & BlackSky Global 5-6' },
              ],
              original_launch: '2019-03-02T07:45:00.000Z',
              reuse_count: 4,
              rtls_attempts: 1,
              rtls_landings: 1,
              status: 'active',
              water_landing: false,
            },
            flight: 5,
            gridfins: true,
            land_success: true,
            landing_intent: true,
            landing_type: 'ASDS',
            landing_vehicle: 'OCISLY',
            legs: true,
            reused: true,
          },
        ],
      },
      rocket_name: 'Falcon 9',
      rocket_type: 'FT',
      rocket: { id: 'falcon9' },
      second_stage: { block: 5, payloads: [{ id: null }, { id: null }] },
    },
    static_fire_date_unix: 1593022680,
    static_fire_date_utc: '2020-06-24T18:18:00.000Z',
    telemetry: { flight_club: null },
    tentative_max_precision: 'hour',
    upcoming: false,
    ships: [{ id: 'GOMSCHIEF' }, { id: 'GOMSTREE' }, { id: 'OCISLY' }],
  },
  {
    details:
      "SpaceX will launch ANASIS-II, a South Korean geostationary military communication satellite from LC-39A, Kennedy Space Center. It will be South Korea's first dedicated military communications satellite. Falcon 9 will deliver the satellite to a geostationary transfer orbit. The booster is expected to land downrange on an ASDS.",
    id: '98',
    is_tentative: false,
    launch_date_local: '2020-07-20T17:30:00-04:00',
    launch_date_unix: 1595280600,
    launch_date_utc: '2020-07-20T21:30:00.000Z',
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name_long:
        'Cape Canaveral Air Force Station Space Launch Complex 40',
      site_name: 'CCAFS SLC 40',
    },
    launch_success: true,
    launch_year: '2020',
    links: {
      article_link:
        'https://spaceflightnow.com/2020/07/20/spacex-delivers-south-koreas-first-military-satellite-into-on-target-orbit/',
      flickr_images: [
        'https://live.staticflickr.com/65535/50136967628_eda99b6353_o.jpg',
        'https://live.staticflickr.com/65535/50137510881_4618ba6c84_o.jpg',
        'https://live.staticflickr.com/65535/50136967553_e1ac93fab0_o.jpg',
        'https://live.staticflickr.com/65535/50136967658_9347d7c575_o.jpg',
      ],
      mission_patch_small: 'https://images2.imgbox.com/e7/01/lB9VKSwG_o.png',
      mission_patch: 'https://images2.imgbox.com/ad/77/CDzoMWTH_o.png',
      presskit: null,
      reddit_campaign:
        'https://www.reddit.com/r/spacex/comments/hkbhqo/anasisii_launch_campaign_thread/',
      reddit_launch:
        'https://www.reddit.com/r/spacex/comments/hu6sci/rspacex_anasisii_official_launch_discussion/',
      reddit_media:
        'https://www.reddit.com/r/spacex/comments/hun4pv/rspacex_anasisii_media_thread_photographer_contest/',
      reddit_recovery:
        'https://www.reddit.com/r/spacex/comments/hvgjk9/anasisii_recovery_thread/',
      video_link: 'https://youtu.be/TshvZlQ7le8',
      wikipedia: null,
    },
    mission_id: [],
    mission_name: 'ANASIS-II',
    rocket: {
      fairings: {
        recovered: true,
        recovery_attempt: true,
        reused: null,
        ship: 'GOMSTREE',
      },
      first_stage: {
        cores: [
          {
            block: 5,
            core: {
              asds_attempts: 2,
              asds_landings: 2,
              block: 5,
              id: 'B1058',
              missions: [
                { flight: 94, name: 'CCtCap Demo Mission 2' },
                { flight: 98, name: 'ANASIS-II' },
              ],
              original_launch: '2020-05-30T19:22:00.000Z',
              reuse_count: 1,
              rtls_attempts: 0,
              rtls_landings: 0,
              status: 'unknown',
              water_landing: false,
            },
            flight: 2,
            gridfins: true,
            land_success: true,
            landing_intent: true,
            landing_type: 'ASDS',
            landing_vehicle: 'JRTI',
            legs: true,
            reused: true,
          },
        ],
      },
      rocket_name: 'Falcon 9',
      rocket_type: 'FT',
      rocket: { id: 'falcon9' },
      second_stage: { block: 5, payloads: [{ id: null }] },
    },
    static_fire_date_unix: 1594490280,
    static_fire_date_utc: '2020-07-11T17:58:00.000Z',
    telemetry: { flight_club: null },
    tentative_max_precision: 'hour',
    upcoming: false,
    ships: [{ id: 'GOMSCHIEF' }, { id: 'GOMSTREE' }, null],
  },
  {
    details:
      'SpaceX launches GPS Block III Space Vehicle 03 from SLC-40, Cape Canaveral AFS aboard a Falcon 9. GPS III is owned and operated by the US Air Force and produced by Lockheed Martin. This is the third GPS III satellite and the second launched by SpaceX. The satellite will be delivered into a MEO transfer orbit. The booster for this mission is expected to land on an ASDS.',
    id: '97',
    is_tentative: false,
    launch_date_local: '2020-06-30T15:55:00-04:00',
    launch_date_unix: 1593546900,
    launch_date_utc: '2020-06-30T19:55:00.000Z',
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name_long:
        'Cape Canaveral Air Force Station Space Launch Complex 40',
      site_name: 'CCAFS SLC 40',
    },
    launch_success: true,
    launch_year: '2020',
    links: {
      article_link:
        'https://spaceflightnow.com/2020/06/30/spacex-launches-its-first-mission-for-u-s-space-force/',
      flickr_images: [
        'https://live.staticflickr.com/65535/50065947228_804efe6117_o.jpg',
        'https://live.staticflickr.com/65535/50065947263_e1a6ea1e22_o.jpg',
        'https://live.staticflickr.com/65535/50065947218_88ef29951a_o.jpg',
        'https://live.staticflickr.com/65535/50066762457_8c92090037_o.jpg',
        'https://live.staticflickr.com/65535/50085443052_9f6b843a02_o.jpg',
        'https://live.staticflickr.com/65535/50085211776_588bed76f0_o.jpg',
        'https://live.staticflickr.com/65535/50084627433_89d8915596_o.jpg',
      ],
      mission_patch_small: 'https://images2.imgbox.com/6d/7e/go9I7pAY_o.png',
      mission_patch: 'https://images2.imgbox.com/5f/63/UmHyB3Y6_o.png',
      presskit: null,
      reddit_campaign:
        'https://www.reddit.com/r/spacex/comments/gzeshn/gps_iii_sv03_launch_campaign_thread/',
      reddit_launch:
        'https://www.reddit.com/r/spacex/comments/hi5hit/rspacex_gps_iii_sv03_columbus_official_launch/',
      reddit_media:
        'https://www.reddit.com/r/spacex/comments/hiq0vd/rspacex_gps_iii_sv03_media_thread_photographer/',
      reddit_recovery:
        'https://www.reddit.com/r/spacex/comments/hjendd/gps_iii_svo3_recovery_thread/',
      video_link: 'https://youtu.be/6zr0nfG3Xy4',
      wikipedia: 'https://en.wikipedia.org/wiki/GPS_Block_III',
    },
    mission_id: [],
    mission_name: 'GPS III SV03 (Columbus)',
    rocket: {
      fairings: {
        recovered: true,
        recovery_attempt: true,
        reused: null,
        ship: null,
      },
      first_stage: {
        cores: [
          {
            block: 5,
            core: {
              asds_attempts: 2,
              asds_landings: 2,
              block: 5,
              id: 'B1060',
              missions: [
                { flight: 97, name: 'GPS III SV03 (Columbus)' },
                { flight: 102, name: 'Starlink-11 (v1.0)' },
              ],
              original_launch: '2020-06-30T19:55:00.000Z',
              reuse_count: 1,
              rtls_attempts: 0,
              rtls_landings: 0,
              status: 'unknown',
              water_landing: false,
            },
            flight: 1,
            gridfins: true,
            land_success: true,
            landing_intent: true,
            landing_type: 'ASDS',
            landing_vehicle: 'JRTI',
            legs: true,
            reused: false,
          },
        ],
      },
      rocket_name: 'Falcon 9',
      rocket_type: 'FT',
      rocket: { id: 'falcon9' },
      second_stage: { block: null, payloads: [{ id: null }] },
    },
    static_fire_date_unix: 1593078480,
    static_fire_date_utc: '2020-06-25T09:48:00.000Z',
    telemetry: { flight_club: null },
    tentative_max_precision: 'hour',
    upcoming: false,
    ships: [],
  },
  {
    details:
      'This mission will launch the eighth batch of operational Starlink satellites, which are expected to be version 1.0, from SLC-40, Cape Canaveral AFS. It is the ninth Starlink launch overall. The satellites will be delivered to low Earth orbit and will spend a few weeks maneuvering to their operational altitude of 550 km. This mission is expected to include rideshare payloads, SkySats 16-18, on top of the Starlink stack. The booster for this mission is expected to land an ASDS.',
    id: '96',
    is_tentative: false,
    launch_date_local: '2020-06-13T05:21:00-04:00',
    launch_date_unix: 1592040060,
    launch_date_utc: '2020-06-13T09:21:00.000Z',
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name_long:
        'Cape Canaveral Air Force Station Space Launch Complex 40',
      site_name: 'CCAFS SLC 40',
    },
    launch_success: true,
    launch_year: '2020',
    links: {
      article_link:
        'https://spaceflightnow.com/2020/06/13/starlink-satellite-deployments-continue-with-successful-falcon-9-launch/',
      flickr_images: [
        'https://live.staticflickr.com/65535/50009748327_93e52a451f_o.jpg',
      ],
      mission_patch_small: 'https://images2.imgbox.com/9a/96/nLppz9HW_o.png',
      mission_patch: 'https://images2.imgbox.com/d2/3b/bQaWiil0_o.png',
      presskit: null,
      reddit_campaign:
        'https://www.reddit.com/r/spacex/comments/gwbr4t/starlink8_launch_campaign_thread/',
      reddit_launch:
        'https://www.reddit.com/r/spacex/comments/h7gqlc/rspacex_starlink_8_official_launch_discussion/',
      reddit_media:
        'https://www.reddit.com/r/spacex/comments/h842qk/rspacex_starlink8_media_thread_photographer/',
      reddit_recovery:
        'https://www.reddit.com/r/spacex/comments/h8sx6q/starlink8_recovery_thread/',
      video_link: 'https://youtu.be/8riKQXChPGg',
      wikipedia: 'https://en.wikipedia.org/wiki/Starlink',
    },
    mission_id: [],
    mission_name: 'Starlink-8 & SkySat 16-18',
    rocket: {
      fairings: {
        recovered: null,
        recovery_attempt: true,
        reused: true,
        ship: 'GOMSTREE',
      },
      first_stage: {
        cores: [
          {
            block: 5,
            core: {
              asds_attempts: 2,
              asds_landings: 2,
              block: 5,
              id: 'B1059',
              missions: [
                { flight: 85, name: 'CRS-19' },
                { flight: 91, name: 'CRS-20' },
                { flight: 96, name: 'Starlink-8 & SkySat 16-18' },
                { flight: 101, name: 'SAOCOM 1B, GNOMES-1, Tyvak-0172' },
              ],
              original_launch: '2019-12-05T17:29:23.000Z',
              reuse_count: 3,
              rtls_attempts: 2,
              rtls_landings: 2,
              status: 'unknown',
              water_landing: false,
            },
            flight: 3,
            gridfins: true,
            land_success: true,
            landing_intent: true,
            landing_type: 'ASDS',
            landing_vehicle: 'OCISLY',
            legs: true,
            reused: true,
          },
        ],
      },
      rocket_name: 'Falcon 9',
      rocket_type: 'FT',
      rocket: { id: 'falcon9' },
      second_stage: { block: 5, payloads: [{ id: null }] },
    },
    static_fire_date_unix: null,
    static_fire_date_utc: null,
    telemetry: { flight_club: null },
    tentative_max_precision: 'hour',
    upcoming: false,
    ships: [
      { id: 'GOMSTREE' },
      { id: 'GOMSCHIEF' },
      { id: 'GOQUEST' },
      { id: 'OCISLY' },
    ],
  },
  {
    details:
      'This mission will launch the seventh batch of operational Starlink satellites, which are expected to be version 1.0, from SLC-40, Cape Canaveral AFS. It is the eighth Starlink launch overall. The satellites will be delivered to low Earth orbit and will spend a few weeks maneuvering to their operational altitude of 550 km. The booster for this mission is expected to land on JRTI on its first mission since arriving at Port Canaveral.',
    id: '95',
    is_tentative: false,
    launch_date_local: '2020-06-03T21:25:00-04:00',
    launch_date_unix: 1591233900,
    launch_date_utc: '2020-06-04T01:25:00.000Z',
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name_long:
        'Cape Canaveral Air Force Station Space Launch Complex 40',
      site_name: 'CCAFS SLC 40',
    },
    launch_success: true,
    launch_year: '2020',
    links: {
      article_link: null,
      flickr_images: [
        'https://live.staticflickr.com/65535/49971196871_a0462d0084_o.jpg',
        'https://live.staticflickr.com/65535/49970682603_e6333945ee_o.jpg',
      ],
      mission_patch_small: 'https://images2.imgbox.com/9a/96/nLppz9HW_o.png',
      mission_patch: 'https://images2.imgbox.com/d2/3b/bQaWiil0_o.png',
      presskit: 'https://spacextimemachine.com/assets/press_kits/185.pdf',
      reddit_campaign:
        'https://www.reddit.com/r/spacex/comments/gamcbr/starlink7_launch_campaign_thread/',
      reddit_launch:
        'https://www.reddit.com/r/spacex/comments/gkfe30/rspacex_starlink_7_official_launch_discussion/',
      reddit_media: null,
      reddit_recovery: null,
      video_link: 'https://youtu.be/y4xBFHjkUvw',
      wikipedia: null,
    },
    mission_id: [],
    mission_name: 'Starlink 7',
    rocket: {
      fairings: {
        recovered: null,
        recovery_attempt: true,
        reused: false,
        ship: 'GOMSTREE',
      },
      first_stage: {
        cores: [
          {
            block: 5,
            core: {
              asds_attempts: 6,
              asds_landings: 6,
              block: 5,
              id: 'B1049',
              missions: [
                { flight: 68, name: 'Telstar 18V' },
                { flight: 74, name: 'Iridium NEXT Mission 8' },
                { flight: 79, name: 'Starlink v0.9' },
                { flight: 87, name: 'Starlink 2' },
                { flight: 95, name: 'Starlink 7' },
                { flight: 100, name: 'Starlink-10 (v1.0) & SkySat 19-21' },
              ],
              original_launch: '2018-09-10T04:45:00.000Z',
              reuse_count: 5,
              rtls_attempts: 0,
              rtls_landings: 0,
              status: 'unknown',
              water_landing: false,
            },
            flight: 5,
            gridfins: true,
            land_success: true,
            landing_intent: true,
            landing_type: 'ASDS',
            landing_vehicle: 'JRTI',
            legs: true,
            reused: true,
          },
        ],
      },
      rocket_name: 'Falcon 9',
      rocket_type: 'FT',
      rocket: { id: 'falcon9' },
      second_stage: { block: 5, payloads: [{ id: null }] },
    },
    static_fire_date_unix: 1589368260,
    static_fire_date_utc: '2020-05-13T11:11:00.000Z',
    telemetry: { flight_club: null },
    tentative_max_precision: 'hour',
    upcoming: false,
    ships: [],
  },
  {
    details:
      "SpaceX will launch the second demonstration mission of its Crew Dragon vehicle as part of NASA's Commercial Crew Transportation Capability Program (CCtCap), carryingNASA astronauts Doug Hurley and Bob Behnken to the International Space Station. This mission will be the first crewed flight to launch from the United States since the end of the Space Shuttle program in 2011. DM-2 demonstrates the Falcon 9 and Crew Dragon's ability to safely transport crew to and from the space station. The booster for this mission will land on OCISLY. The mission will be complete with the safe return the Dragon capsule and astronauts.",
    id: '94',
    is_tentative: false,
    launch_date_local: '2020-05-30T15:22:00-04:00',
    launch_date_unix: 1590866520,
    launch_date_utc: '2020-05-30T19:22:00.000Z',
    launch_site: {
      site_id: 'ksc_lc_39a',
      site_name_long: 'Kennedy Space Center Historic Launch Complex 39A',
      site_name: 'KSC LC 39A',
    },
    launch_success: true,
    launch_year: '2020',
    links: {
      article_link:
        'https://spaceflightnow.com/2020/05/30/nasa-astronauts-launch-from-us-soil-for-first-time-in-nine-years/',
      flickr_images: [
        'https://live.staticflickr.com/65535/49927519643_b43c6d4c44_o.jpg',
        'https://live.staticflickr.com/65535/49927519588_8a39a3994f_o.jpg',
        'https://live.staticflickr.com/65535/49928343022_6fb33cbd9c_o.jpg',
        'https://live.staticflickr.com/65535/49934168858_cacb00d790_o.jpg',
        'https://live.staticflickr.com/65535/49934682271_fd6a31becc_o.jpg',
        'https://live.staticflickr.com/65535/49956109906_f88d815772_o.jpg',
        'https://live.staticflickr.com/65535/49956109706_cffa847208_o.jpg',
        'https://live.staticflickr.com/65535/49956109671_859b323ede_o.jpg',
        'https://live.staticflickr.com/65535/49955609618_4cca01d581_o.jpg',
        'https://live.staticflickr.com/65535/49956396622_975c116b71_o.jpg',
        'https://live.staticflickr.com/65535/49955609378_9b77e5c771_o.jpg',
        'https://live.staticflickr.com/65535/49956396262_ef41c1d9b0_o.jpg',
      ],
      mission_patch_small: 'https://images2.imgbox.com/eb/0f/Vev7xkUX_o.png',
      mission_patch: 'https://images2.imgbox.com/ab/79/Wyc9K7fv_o.png',
      presskit:
        'https://www.nasa.gov/sites/default/files/atoms/files/commercialcrew_press_kit.pdf',
      reddit_campaign:
        'https://www.reddit.com/r/spacex/comments/fjf6rr/dm2_launch_campaign_thread/',
      reddit_launch:
        'https://www.reddit.com/r/spacex/comments/glwz6n/rspacex_cctcap_demonstration_mission_2_general',
      reddit_media:
        'https://www.reddit.com/r/spacex/comments/gp1gf5/rspacex_dm2_media_thread_photographer_contest/',
      reddit_recovery:
        'https://www.reddit.com/r/spacex/comments/gu5gkd/cctcap_demonstration_mission_2_stage_1_recovery/',
      video_link: 'https://youtu.be/xY96v0OIcK4',
      wikipedia: 'https://en.wikipedia.org/wiki/Crew_Dragon_Demo-2',
    },
    mission_id: ['EE86F74'],
    mission_name: 'CCtCap Demo Mission 2',
    rocket: {
      fairings: null,
      first_stage: {
        cores: [
          {
            block: 5,
            core: {
              asds_attempts: 2,
              asds_landings: 2,
              block: 5,
              id: 'B1058',
              missions: [
                { flight: 94, name: 'CCtCap Demo Mission 2' },
                { flight: 98, name: 'ANASIS-II' },
              ],
              original_launch: '2020-05-30T19:22:00.000Z',
              reuse_count: 1,
              rtls_attempts: 0,
              rtls_landings: 0,
              status: 'unknown',
              water_landing: false,
            },
            flight: 1,
            gridfins: true,
            land_success: true,
            landing_intent: true,
            landing_type: 'ASDS',
            landing_vehicle: 'OCISLY',
            legs: true,
            reused: false,
          },
        ],
      },
      rocket_name: 'Falcon 9',
      rocket_type: 'FT',
      rocket: { id: 'falcon9' },
      second_stage: { block: 5, payloads: [{ id: null }] },
    },
    static_fire_date_unix: 1590169140,
    static_fire_date_utc: '2020-05-22T17:39:00.000Z',
    telemetry: { flight_club: null },
    tentative_max_precision: 'hour',
    upcoming: false,
    ships: [
      { id: 'OCISLY' },
      { id: 'GOQUEST' },
      { id: 'GOSEARCHER' },
      { id: 'GONAVIGATOR' },
    ],
  },
  {
    details:
      'This mission will launch the sixth batch of operational Starlink satellites, which are expected to be version 1.0, from SLC-40, Cape Canaveral AFS. It is the seventh Starlink launch overall. The satellites will be delivered to low Earth orbit and will spend a few weeks maneuvering to their operational altitude of 550 km. The booster for this mission is expected to land on OCISLY.',
    id: '93',
    is_tentative: false,
    launch_date_local: '2020-04-22T15:30:00-04:00',
    launch_date_unix: 1587583800,
    launch_date_utc: '2020-04-22T19:30:00.000Z',
    launch_site: {
      site_id: 'ksc_lc_39a',
      site_name_long: 'Kennedy Space Center Historic Launch Complex 39A',
      site_name: 'KSC LC 39A',
    },
    launch_success: true,
    launch_year: '2020',
    links: {
      article_link:
        'https://spaceflightnow.com/2020/04/22/spacexs-starlink-network-surpasses-400-satellite-mark-after-successful-launch/',
      flickr_images: [
        'https://live.staticflickr.com/65535/49673373182_93a517e140_o.jpg',
        'https://live.staticflickr.com/65535/49672551378_fabc17ef6f_o.jpg',
        'https://live.staticflickr.com/65535/49672551303_564ce21658_o.jpg',
        'https://live.staticflickr.com/65535/49806771628_fef13c852d_o.jpg',
        'https://live.staticflickr.com/65535/49807633862_e5abcb41a6_o.jpg',
      ],
      mission_patch_small: 'https://images2.imgbox.com/9a/96/nLppz9HW_o.png',
      mission_patch: 'https://images2.imgbox.com/d2/3b/bQaWiil0_o.png',
      presskit:
        'https://www.spacex.com/sites/spacex/files/seventh_starlink_mission_overview.pdf',
      reddit_campaign:
        'https://www.reddit.com/r/spacex/comments/fxkc7k/starlink6_launch_campaign_thread/',
      reddit_launch:
        'https://www.reddit.com/r/spacex/comments/g5jmx0/rspacex_starlink_6_official_launch_discussion/',
      reddit_media:
        'https://www.reddit.com/r/spacex/comments/g5fqka/rspacex_starlink6_media_thread_photographer/',
      reddit_recovery:
        'https://www.reddit.com/r/spacex/comments/g6kztd/rspacex_starlink_v1_l6_recovery_discussion/',
      video_link: 'https://youtu.be/wSge0I7pwFI',
      wikipedia: 'https://en.wikipedia.org/wiki/Starlink',
    },
    mission_id: [],
    mission_name: 'Starlink 6',
    rocket: {
      fairings: {
        recovered: null,
        recovery_attempt: false,
        reused: true,
        ship: 'GOMSTREE',
      },
      first_stage: {
        cores: [
          {
            block: 5,
            core: {
              asds_attempts: 4,
              asds_landings: 4,
              block: 5,
              id: 'B1051',
              missions: [
                { flight: 76, name: 'CCtCap Demo Mission 1' },
                { flight: 80, name: 'RADARSAT Constellation' },
                { flight: 89, name: 'Starlink 3' },
                { flight: 93, name: 'Starlink 6' },
                { flight: 99, name: 'Starlink-9 (v1.0) & BlackSky Global 5-6' },
              ],
              original_launch: '2019-03-02T07:45:00.000Z',
              reuse_count: 4,
              rtls_attempts: 1,
              rtls_landings: 1,
              status: 'active',
              water_landing: false,
            },
            flight: 4,
            gridfins: true,
            land_success: true,
            landing_intent: true,
            landing_type: 'ASDS',
            landing_vehicle: 'OCISLY',
            legs: true,
            reused: true,
          },
        ],
      },
      rocket_name: 'Falcon 9',
      rocket_type: 'FT',
      rocket: { id: 'falcon9' },
      second_stage: { block: 5, payloads: [{ id: null }] },
    },
    static_fire_date_unix: 1587687810,
    static_fire_date_utc: '2020-04-17T11:48:00.000Z',
    telemetry: { flight_club: null },
    tentative_max_precision: 'hour',
    upcoming: false,
    ships: [{ id: 'OCISLY' }, { id: 'GOMSTREE' }, { id: 'GOMSCHIEF' }],
  },
];
