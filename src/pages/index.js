import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import CodeSnippet from "@site/src/theme/CodeSnippet";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

const install = `# Common example
sudo apt update

# Run and explore
man sudo`

const clone = `# Make yourself
git clone https://gitlab.com/getchipman/lab.git`

const snippets = [
  {
    label: 'Mapping',
    config: `input:
  kafka_balanced:
    addresses: [ TODO ]
    topics: [ foo, bar ]
    consumer_group: foogroup

pipeline:
  processors:
    - jmespath:
        query: '{ message: @, meta: { link: length(links) } }'

output:
  s3:
    bucket: TODO
    path: "\${!metadata:kafka}/\${!json_field:message.id}.json"`,
  },
  {
    label: 'Multiplexing',
    config: `input:
  gcp_pubsub:
    project: foo
    subscription: bar

output:
  switch:
    outputs:
    - output:
        sqs:
          url: https://sqs.us-west-2.amazonaws.com/TODO/TODO
          max_in_flight: 20
      condition:
        jmespath:
          query: "contains(doc.tags, 'AWS')"

    - output:
        redis_pubsub:
          url: tcp://TODO:6379
          channel: baz
          max_in_flight: 20`,
  },
  {
    label: 'Enrichments',
    config: `input:
  mqtt:
    urls: [ tcp://TODO:1883 ]
    topics: [ foo ]

pipeline:
  processors:
    - process_map:
        premap:
          id: doc.id
          contents: doc.body
        processors:
          - lambda:
              function: sentiment_analysis
        postmap:
          results.sentiment: .

output:
  redis_streams:
    url: tcp://TODO:6379
    stream: baz
    max_in_flight: 20`,
  },
];

function Snippet({label, config}) {
  return (
    <CodeSnippet className={styles.configSnippet} snippet={config}></CodeSnippet>
  );
}

const features = [
  {
    title: 'Knowledge Base',
    imageUrl: 'img/undraw_base.svg',
    description: (
      <>
        <p>
          I don't know or I don't understand. So the search for information usually begins.
          Whatever the subject, the internet provides us with a series of possibilities,
          from which we can try to solve the problem. Searching, reading, trying and asking at some point we succeeded.
          From repeating the process so much, we come to understand increasingly larger structures and some knowledge remains,
          it must be documented. <a href="#">Read the Base</a>
        </p>
      </>
    ),
  },
  {
    title: 'Labs',
    imageUrl: 'img/undraw_lab.svg',
    description: (
      <>
        <p>
          Laboratories created in <a href="https://www.proxmox.com/en/">Proxmox</a>, a complete <i>opensource</i> server virtualization management solution.
          <a href="#"> Find</a> scripts and documentation to create, update, setup, backup and automate routines. On the labs we can execute the projects bellow.
        </p>
      </>
    ),
  },
  {
    title: 'Documentation',
    imageUrl: 'img/undraw_docs.svg',
    description: (
      <>
        <p>
          What's the problem? What resources do we have to implement a solution? How does it all connect?
          Answering and defining the specifications we can perform the configuration and the correct storage of sensitive information.
        </p>
      </>
    ),
  },
  {
    title: 'Projects',
    imageUrl: 'img/undraw_project.svg',
    description: (
      <>
        <p>
          The path from the problem presented to the solution found,
          here you can find an index for the main projects carried out.
        </p>
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--6', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={classnames('padding-vert--md', styles.featureImage)} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={classnames('hero', styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className={classnames('col col--5 col--offset-1')}>
            <h1 className="hero__title">{siteConfig.title}</h1>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <Link
                className={classnames(
                  'button button--outline button--secondary button--lg',
                  styles.getStarted,
                )}
                to={useBaseUrl('docs/doc1')}>
                Get Started
              </Link>
            </div>
          </div>
          <div className={classnames('col col--5')}>
            <img className={styles.heroImg} src="img/logo_hero.svg" />
          </div>
        </div>
        </div>
      </header>
      <main>
      <div className="container">
          <div className="row">
          <div className={classnames(`${styles.pitch} col col--6`)}>
            <h2>Repository</h2>
            <p>
            In exploring the information technology space we find and develop tools. It is essential to carry a <b>handbook</b>: centralizing,
            organizing and making relevant information available. The content is produced regularly to meet the demands of current projects.
          </p>
          <CodeSnippet snippet={clone} lang="bash"></CodeSnippet>
          </div>
            <div className={classnames(`${styles.pitch} col col--6`)}>
              <h2>Solve and understand</h2>
              <p>
                Do you know the <b>man</b> command? One of the most used commands in <i>Linux</i>.
                This is the operating system manual, and it can find all or almost
                all of the available commands. <a href="#">Read tips on the Blog</a>
              </p>
              <CodeSnippet snippet={install} lang="bash"></CodeSnippet>
            </div>
          </div>
        </div>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
