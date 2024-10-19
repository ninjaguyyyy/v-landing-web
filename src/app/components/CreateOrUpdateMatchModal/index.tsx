import { Button, Col, Modal, Row } from 'antd';
import React from 'react';
import styles from './index.module.scss';
import TeamProfileHeader from 'app/components/CreateOrUpdateMatchModal/TeamProfileHeader';
import Navigator from 'app/components/CreateOrUpdateMatchModal/Navigator';
import TextInputField from 'app/components/Form/TextInputField';
import DatePickerField from 'app/components/Form/DatePickerField';
type Props = {
  onCancel: () => void;
};

export default function CreateOrUpdateMatchModal({ onCancel }: Props) {
  const handleOk = () => {
    console.log('ok');
    // setIsModalOpen(false);
  };

  const handleCancel = () => {
    console.log('cancel');

    // setIsModalOpen(false);
  };

  return (
    <Modal
      open={true}
      onOk={handleOk}
      onCancel={onCancel}
      width={780}
      className={styles.container}
      footer={false}
    >
      <Row className="w-full text-dark" justify="space-between">
        <Col span={7} className="left">
          <TeamProfileHeader />
          <Navigator />
          <div className="px-4 py-6">
            <Button
              type="primary"
              className="bg-purple hover:!bg-purple-1 w-full font-semibold h-[40px] text-sm mb-3"
              // onClick={}
            >
              Save Changes!
            </Button>

            <Button
              // type="primary"
              className="hover:!bg-dark hover:!text-white hover:!border-dark text-gray-2 w-full font-semibold h-[40px] text-sm"
              // onClick={}
            >
              Discard All
            </Button>
          </div>
        </Col>

        <Col span={16} className="pr-10">
          <p className="text-base font-bold">Match Info</p>
          <form action="">
            <div className="mb-2">
              <label className="block font-semibold mb-1" htmlFor="">
                Stadium & Date
              </label>
              <TextInputField />
            </div>

            <div className="w-full">
              <DatePickerField />
            </div>

            <Row gutter={12} className="mt-4">
              <Col span={12}>
                <h3 className="text-center border-0 border-b border-gray-7 border-solid mx-8">
                  HOME
                </h3>
                <div className="mb-3">
                  <label className="block font-semibold mb-1" htmlFor="">
                    Team
                  </label>
                  <TextInputField />
                </div>

                <div>
                  <label className="block font-semibold mb-1" htmlFor="">
                    Score
                  </label>
                  <TextInputField />
                </div>
              </Col>
              <Col span={12}>
                <h3 className=" text-center border-0 border-b border-gray-7 border-solid mx-8">
                  AWAY
                </h3>
                <div className="mb-3">
                  <label className="block font-semibold mb-1" htmlFor="">
                    Team
                  </label>
                  <TextInputField />
                </div>

                <div>
                  <label className="block font-semibold mb-1" htmlFor="">
                    Score
                  </label>
                  <TextInputField />
                </div>
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
    </Modal>
  );
}
