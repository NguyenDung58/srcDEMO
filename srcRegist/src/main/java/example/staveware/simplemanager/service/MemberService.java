package example.staveware.simplemanager.service;

import java.util.List;
import example.staveware.simplemanager.dataset.Member;

public interface MemberService {
	void create(Member member);

	List<Member> findAll();

	void delete(String userid);

	Member findOne(String userid);
}