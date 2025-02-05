import  { FC, Fragment } from 'react';
import PageHeader from '../../../../layouts/layoutcomponents/pageheader';

interface EmptyPageProps {}

const EmptyPage: FC<EmptyPageProps> = () => (
  <Fragment>
    <PageHeader titles="Empty" active="Empty" items={['Pages']} />
                        <div className="row ">
                            <div className="col-md-12">
                            </div>
                        </div>
                    </Fragment>

);

export default EmptyPage;
