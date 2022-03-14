import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { Link, navigate } from '@reach/router'

import {
  isWefundWallet,
  isCommunityWallet,
  isBackerWallet,
  isCreatorWallet,
  getStageTitle,
} from '../Util'

import { ButtonTransition } from '../ImageTransition'
import { useStore } from '../../store'

export default function StatusButtons({
  index,
  data,
  activeTab,
  WefundApprove,
  MilestoneVote,
  NextFundraisingStage,
}) {
  const { state, dispatch } = useStore()
  return (
    <>
      {activeTab === 'WeFundApproval' && isWefundWallet(state) && (
        <Flex w={'330px'} justify={'space-between'}>
          <ButtonTransition
            unitid={'Approve' + index}
            selected={false}
            width="150px"
            height="45px"
            rounded="33px"
            onClick={() =>
              WefundApprove(data.project_id)
            }
          >
            <Text
              fontSize={{
                base: '14px',
                lg: '16px',
              }}
            >
              Approve Project
            </Text>
          </ButtonTransition>
        </Flex>
      )}
      {activeTab === 'Fundraising' && (
        <>
          <Text>{getStageTitle(data)} phase</Text>
          {isCreatorWallet(state, data.project_id) && (
            <ButtonTransition
              mb="10px"
              rounded="33px"
              selected={false}
              unitid={'next stage' + index}
              width="150px"
              height="45px"
              fontSize={{ base: '14px', lg: '16px' }}
              onClick={() => { NextFundraisingStage(data.project_id, data.fundraising_stage) }}
            >
              <Text fontSize={{ base: '14px', lg: '16px' }} >
                Next Stage
              </Text>
            </ButtonTransition>
          )}
          <ButtonTransition
            mb="10px"
            rounded="33px"
            selected={false}
            unitid={'visit' + index}
            width="150px"
            height="45px"
            fontSize={{ base: '14px', lg: '16px' }}
            onClick={() => {
              navigate(
                '/invest_step1?project_id=' +
                data.project_id,
              )
            }}
          >
            <Text fontSize={{ base: '14px', lg: '16px' }} >
              Back Project
            </Text>
          </ButtonTransition>
        </>
      )}
      {activeTab === 'MileStoneDelivery' && isBackerWallet(state, data.project_id) && (
        <Flex w={'330px'} justify={'space-between'}>
          <ButtonTransition
            unitid={'milestonevoteyes' + index}
            width="150px"
            height="45px"
            fontSize={{ base: '14px', lg: '16px' }}
            selected={false}
            rounded="33px"
            onClick={() =>
              MilestoneVote(data.project_id, true)
            }
          >
            <Text
              fontSize={{
                base: '14px',
                lg: '16px',
              }}
            >
              Vote Yes
            </Text>
          </ButtonTransition>

          <ButtonTransition
            unitid={'milestonevoteno' + index}
            selected={false}
            width="150px"
            height="45px"
            fontSize={{ base: '14px', lg: '16px' }}
            rounded="33px"
            onClick={() =>
              MilestoneVote(data.project_id, false)
            }
          >
            <Text
              fontSize={{
                base: '14px',
                lg: '16px',
              }}
            >
              Vote No
            </Text>
          </ButtonTransition>
        </Flex>
      )}
    </>
  )
};
