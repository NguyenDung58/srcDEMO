package example.staveware.simplemanager.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import example.staveware.simplemanager.dataset.Member;
import example.staveware.simplemanager.repository.MemberRepository;

@Service
public class MemberServiceImpl implements MemberService {
	@Autowired
	private MemberRepository repository;

	@Override
	@Transactional
	public void create(Member member) {
		Member tmp = repository.findOne(member.getUserid());
		if (tmp != null) {
			throw new DuplicateKeyException("ìØÇ∂UserIdÇ™ä˘Ç…ìoò^Ç≥ÇÍÇƒÇ¢Ç‹Ç∑ÅB");
		}
		repository.save(member);
	}

	@Override
	public List<Member> findAll() {
		return repository.findAll();
	}

	@Override
	public void delete(String userid) {
		repository.delete(userid);
	}

	@Override
	public Member findOne(String userid) {
		return repository.findOne(userid);
	}
}